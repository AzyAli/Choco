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
function initializeDrawTool() {
    const drawSource = new ol.source.Vector();
    const drawLayer = new ol.layer.Vector({
        source: drawSource,
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

    document.getElementById('draw-widget').addEventListener('click', function() {
        const drawType = document.getElementById('draw-type');
        drawType.style.display = drawType.style.display === 'none' ? 'block' : 'none';
    });

    document.getElementById('draw-type').addEventListener('change', function(e) {
        if (drawInteraction) {
            map.removeInteraction(drawInteraction);
        }
        
        if (e.target.value === 'None') return;
        
        drawInteraction = new ol.interaction.Draw({
            source: drawSource,
            type: e.target.value
        });
        
        map.addInteraction(drawInteraction);
    });
}

// Layer Swipe Tool
function initializeLayerSwipe() {
    document.getElementById('swipe-widget').addEventListener('click', function() {
        const swipeControl = document.querySelector('.swipe-control');
        swipeControl.style.display = swipeControl.style.display === 'none' ? 'block' : 'none';
        
        if (swipeControl.style.display === 'block' && !swipeLayer) {
            // Get the first visible non-base layer
            const layers = map.getLayers().getArray();
            for (let i = layers.length - 1; i >= 0; i--) {
                const layer = layers[i];
                if (layer.getVisible() && layer.get('type') !== 'base') {
                    swipeLayer = layer;
                    break;
                }
            }
            
            if (swipeLayer) {
                swipeLayer.on('prerender', function(event) {
                    const ctx = event.context;
                    const mapSize = map.getSize();
                    const width = mapSize[0] * (document.getElementById('swipe').value / 100);
                    
                    ctx.save();
                    ctx.beginPath();
                    ctx.rect(width, 0, mapSize[0] - width, mapSize[1]);
                    ctx.clip();
                });

                swipeLayer.on('postrender', function(event) {
                    const ctx = event.context;
                    ctx.restore();
                });

                // Force map render
                map.render();
            }
        }
    });

    document.getElementById('swipe').addEventListener('input', function() {
        map.render();
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

// Upload Tool
function initializeUpload() {
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

// Initialize all widgets when the map is ready
window.addEventListener('load', function() {
    initializeMeasureTool();
    initializeDrawTool();
    initializeLayerSwipe();
    initializeExport();
    initializeUpload();
});
