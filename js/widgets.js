// Global variables
let measureDraw;
let drawInteraction;
let swipeLayer;
let uploadTooltip;

// Create upload tooltip
function createUploadTooltip() {
    if (!document.querySelector('.upload-tooltip')) {
        const tooltip = document.createElement('div');
        tooltip.className = 'upload-tooltip';
        tooltip.textContent = 'Drag and drop your GeoJSON, KML, or GPX file here to view it on the map';
        document.body.appendChild(tooltip);
        uploadTooltip = tooltip;
    }
}

// Measure Tool
function initializeMeasureTool() {
    const measureSource = new ol.source.Vector();
    const measureLayer = new ol.layer.Vector({
        source: measureSource,
        style: new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(46, 125, 50, 0.2)'
            }),
            stroke: new ol.style.Stroke({
                color: '#2E7D32',
                width: 2
            }),
            image: new ol.style.Circle({
                radius: 7,
                fill: new ol.style.Fill({
                    color: '#2E7D32'
                })
            })
        })
    });

    map.addLayer(measureLayer);

    let measureTooltipElement;
    let measureTooltip;
    let sketch;

    function createMeasureTooltip() {
        if (measureTooltipElement) {
            measureTooltipElement.parentNode.removeChild(measureTooltipElement);
        }
        measureTooltipElement = document.createElement('div');
        measureTooltipElement.className = 'tooltip tooltip-measure';
        measureTooltip = new ol.Overlay({
            element: measureTooltipElement,
            offset: [0, -15],
            positioning: 'bottom-center',
            stopEvent: false
        });
        map.addOverlay(measureTooltip);
    }

    function formatLength(line) {
        const sourceProj = map.getView().getProjection();
        const length = ol.sphere.getLength(line, {
            projection: sourceProj
        });
        let output;
        if (length > 100) {
            output = Math.round((length / 1000) * 100) / 100 + ' km';
        } else {
            output = Math.round(length * 100) / 100 + ' m';
        }
        return output;
    }

    function formatArea(polygon) {
        const sourceProj = map.getView().getProjection();
        const area = ol.sphere.getArea(polygon, {
            projection: sourceProj
        });
        let output;
        if (area > 10000) {
            output = Math.round((area / 1000000) * 100) / 100 + ' km²';
        } else {
            output = Math.round(area * 100) / 100 + ' m²';
        }
        return output;
    }

    document.getElementById('measure-widget').addEventListener('click', function() {
        const measureType = document.getElementById('measure-type');
        measureType.style.display = measureType.style.display === 'none' ? 'block' : 'none';
    });

    document.getElementById('measure-type').addEventListener('change', function(e) {
        map.removeInteraction(measureDraw);
        measureSource.clear();
        
        if (e.target.value === 'None') return;
        
        const type = e.target.value === 'area' ? 'Polygon' : 'LineString';
        measureDraw = new ol.interaction.Draw({
            source: measureSource,
            type: type,
            style: new ol.style.Style({
                fill: new ol.style.Fill({
                    color: 'rgba(46, 125, 50, 0.2)'
                }),
                stroke: new ol.style.Stroke({
                    color: '#2E7D32',
                    width: 2
                }),
                image: new ol.style.Circle({
                    radius: 5,
                    stroke: new ol.style.Stroke({
                        color: '#2E7D32'
                    }),
                    fill: new ol.style.Fill({
                        color: 'rgba(255, 255, 255, 0.2)'
                    })
                })
            })
        });
        
        map.addInteraction(measureDraw);
        createMeasureTooltip();
        
        let listener;
        measureDraw.on('drawstart', function(evt) {
            sketch = evt.feature;
            
            let tooltipCoord = evt.coordinate;
            listener = sketch.getGeometry().on('change', function(evt) {
                const geom = evt.target;
                let output;
                if (geom instanceof ol.geom.Polygon) {
                    output = formatArea(geom);
                    tooltipCoord = geom.getInteriorPoint().getCoordinates();
                } else if (geom instanceof ol.geom.LineString) {
                    output = formatLength(geom);
                    tooltipCoord = geom.getLastCoordinate();
                }
                measureTooltipElement.innerHTML = output;
                measureTooltip.setPosition(tooltipCoord);
            });
        });
        
        measureDraw.on('drawend', function() {
            measureTooltipElement.className = 'tooltip tooltip-static';
            measureTooltip.setOffset([0, -7]);
            sketch = null;
            measureTooltipElement = null;
            createMeasureTooltip();
            ol.Observable.unByKey(listener);
        });
    });
}

// Draw Tool
function initDrawTool() {
    let drawLayer = new ol.layer.Vector({
        source: new ol.source.Vector(),
        style: new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(46, 125, 50, 0.2)'
            }),
            stroke: new ol.style.Stroke({
                color: '#2E7D32',
                width: 2
            }),
            image: new ol.style.Circle({
                radius: 7,
                fill: new ol.style.Fill({
                    color: '#2E7D32'
                })
            })
        })
    });

    map.addLayer(drawLayer);
    let draw;

    document.getElementById('draw-widget').addEventListener('click', function() {
        if (draw) {
            map.removeInteraction(draw);
            draw = null;
            this.style.backgroundColor = 'white';
            return;
        }

        this.style.backgroundColor = '#e0e0e0';
        draw = new ol.interaction.Draw({
            source: drawLayer.getSource(),
            type: 'Polygon'
        });

        map.addInteraction(draw);
    });
}

// Layer Swipe Tool
function initSwipeTool() {
    let swipeControl = document.createElement('div');
    swipeControl.className = 'swipe-control';
    swipeControl.innerHTML = '<input type="range" id="swipe" min="0" max="100" value="50" style="width: 100%">';
    document.body.appendChild(swipeControl);

    let swipeWidget = document.getElementById('swipe-widget');
    let isSwipeActive = false;
    let swipeLayer = null;

    swipeWidget.addEventListener('click', function() {
        if (isSwipeActive) {
            // Deactivate swipe
            swipeControl.style.display = 'none';
            if (swipeLayer) {
                swipeLayer.un('prerender', handlePrerender);
                swipeLayer.un('postrender', handlePostrender);
                swipeLayer = null;
            }
            isSwipeActive = false;
            this.style.backgroundColor = 'white';
        } else {
            // Get the topmost visible non-base layer
            const layers = map.getLayers().getArray();
            for (let i = layers.length - 1; i >= 0; i--) {
                const layer = layers[i];
                if (layer.getVisible() && layer !== baseLayer) {
                    swipeLayer = layer;
                    break;
                }
            }
            
            if (swipeLayer) {
                swipeControl.style.display = 'block';
                isSwipeActive = true;
                this.style.backgroundColor = '#e0e0e0';
                
                swipeLayer.on('prerender', handlePrerender);
                swipeLayer.on('postrender', handlePostrender);
                map.render();
            }
        }
    });

    function handlePrerender(event) {
        const ctx = event.context;
        const mapSize = map.getSize();
        const width = mapSize[0] * (document.getElementById('swipe').value / 100);
        const tl = ol.render.getRenderPixel(event, [width, 0]);
        const tr = ol.render.getRenderPixel(event, [mapSize[0], 0]);
        const bl = ol.render.getRenderPixel(event, [width, mapSize[1]]);
        const br = ol.render.getRenderPixel(event, mapSize);

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(tl[0], tl[1]);
        ctx.lineTo(bl[0], bl[1]);
        ctx.lineTo(br[0], br[1]);
        ctx.lineTo(tr[0], tr[1]);
        ctx.closePath();
        ctx.clip();
    }

    function handlePostrender(event) {
        const ctx = event.context;
        ctx.restore();
    }

    document.getElementById('swipe').addEventListener('input', function() {
        map.render();
    });
}

// Upload Tool
function initUploadTool() {
    createUploadTooltip();
    
    const uploadSource = new ol.source.Vector();
    const uploadLayer = new ol.layer.Vector({
        source: uploadSource,
        style: new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(46, 125, 50, 0.2)'
            }),
            stroke: new ol.style.Stroke({
                color: '#2E7D32',
                width: 2
            }),
            image: new ol.style.Circle({
                radius: 7,
                fill: new ol.style.Fill({
                    color: '#2E7D32'
                })
            })
        })
    });

    map.addLayer(uploadLayer);

    const dragAndDrop = new ol.interaction.DragAndDrop({
        formatConstructors: [
            ol.format.GeoJSON,
            ol.format.KML,
            ol.format.GPX
        ]
    });

    dragAndDrop.on('addfeatures', function(event) {
        uploadSource.addFeatures(event.features);
        map.getView().fit(uploadSource.getExtent());
        uploadTooltip.style.display = 'none';
    });

    map.addInteraction(dragAndDrop);

    document.getElementById('upload-widget').addEventListener('click', function() {
        uploadTooltip.style.display = uploadTooltip.style.display === 'none' ? 'block' : 'none';
    });
}

// Export Tool
function initializeExport() {
    document.getElementById('export-widget').addEventListener('click', function() {
        map.once('rendercomplete', function() {
            const mapCanvas = document.createElement('canvas');
            const size = map.getSize();
            mapCanvas.width = size[0];
            mapCanvas.height = size[1];
            const mapContext = mapCanvas.getContext('2d');
            
            Array.prototype.forEach.call(
                document.querySelectorAll('.ol-layer canvas'),
                function(canvas) {
                    if (canvas.width > 0) {
                        const opacity = canvas.parentNode.style.opacity || canvas.style.opacity;
                        mapContext.globalAlpha = opacity === '' ? 1 : Number(opacity);
                        
                        const transform = canvas.style.transform;
                        const matrix = transform
                            ? transform
                                .match(/^matrix\(([^\(]*)\)$/)[1]
                                .split(',')
                                .map(Number)
                            : [
                                parseFloat(canvas.style.width) / canvas.width,
                                0,
                                0,
                                parseFloat(canvas.style.height) / canvas.height,
                                0,
                                0
                            ];
                        
                        mapContext.setTransform(...matrix);
                        mapContext.drawImage(canvas, 0, 0);
                    }
                }
            );
            
            const link = document.createElement('a');
            link.href = mapCanvas.toDataURL();
            link.download = 'map.png';
            link.click();
        });
        map.renderSync();
    });
}

// Initialize all widgets when the map is ready
window.addEventListener('load', function() {
    initializeMeasureTool();
    initDrawTool();
    initSwipeTool();
    initializeExport();
    initUploadTool();
});
