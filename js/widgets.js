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

    let measureDraw;
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
        const length = ol.sphere.getLength(line);
        let output;
        if (length > 100) {
            output = Math.round((length / 1000) * 100) / 100 + ' km';
        } else {
            output = Math.round(length * 100) / 100 + ' m';
        }
        return output;
    }

    function formatArea(polygon) {
        const area = ol.sphere.getArea(polygon);
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
    const drawSource = new ol.source.Vector({wrapX: false});
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

    let draw;

    document.getElementById('draw-widget').addEventListener('click', function() {
        const drawType = document.getElementById('draw-type');
        drawType.style.display = drawType.style.display === 'none' ? 'block' : 'none';
    });

    document.getElementById('draw-type').addEventListener('change', function(e) {
        map.removeInteraction(draw);
        
        if (e.target.value === 'None') return;
        
        draw = new ol.interaction.Draw({
            source: drawSource,
            type: e.target.value
        });
        
        map.addInteraction(draw);
    });
}

// Layer Swipe Tool
function initializeLayerSwipe() {
    let swipeLayer;
    const swipeControl = document.querySelector('.swipe-control');
    const swipe = document.getElementById('swipe');

    document.getElementById('swipe-widget').addEventListener('click', function() {
        swipeControl.style.display = swipeControl.style.display === 'none' ? 'block' : 'none';
        
        if (swipeControl.style.display === 'block' && !swipeLayer) {
            map.getLayers().forEach(function(layer) {
                if (layer.getVisible() && layer !== basemapLayer) {
                    swipeLayer = layer;
                    return;
                }
            });
            
            if (swipeLayer) {
                swipeLayer.on('prerender', function(event) {
                    const ctx = event.context;
                    const mapSize = map.getSize();
                    const width = mapSize[0] * (swipe.value / 100);
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
                });

                swipeLayer.on('postrender', function(event) {
                    const ctx = event.context;
                    ctx.restore();
                });
            }
        }
    });

    swipe.addEventListener('input', function() {
        map.render();
    });
}

// Export Tool
function initializeExport() {
    document.getElementById('export-widget').addEventListener('click', function() {
        const exportControl = document.querySelector('.export-control');
        exportControl.style.display = exportControl.style.display === 'none' ? 'block' : 'none';
        
        if (exportControl.style.display === 'block') {
            map.once('rendercomplete', function() {
                const mapCanvas = document.createElement('canvas');
                const size = map.getSize();
                mapCanvas.width = size[0];
                mapCanvas.height = size[1];
                const mapContext = mapCanvas.getContext('2d');
                
                Array.prototype.forEach.call(
                    map.getViewport().querySelectorAll('.ol-layer canvas, canvas.ol-layer'),
                    function(canvas) {
                        if (canvas.width > 0) {
                            const opacity = canvas.parentNode.style.opacity || canvas.style.opacity;
                            mapContext.globalAlpha = opacity === '' ? 1 : Number(opacity);
                            
                            let matrix;
                            const transform = canvas.style.transform;
                            if (transform) {
                                matrix = transform
                                    .match(/^matrix\(([^\(]*)\)$/)[1]
                                    .split(',')
                                    .map(Number);
                            } else {
                                matrix = [
                                    parseFloat(canvas.style.width) / canvas.width,
                                    0,
                                    0,
                                    parseFloat(canvas.style.height) / canvas.height,
                                    0,
                                    0,
                                ];
                            }
                            
                            CanvasRenderingContext2D.prototype.setTransform.apply(
                                mapContext,
                                matrix
                            );
                            
                            const backgroundColor = canvas.parentNode.style.backgroundColor;
                            if (backgroundColor) {
                                mapContext.fillStyle = backgroundColor;
                                mapContext.fillRect(0, 0, canvas.width, canvas.height);
                            }
                            
                            mapContext.drawImage(canvas, 0, 0);
                        }
                    }
                );
                
                mapContext.globalAlpha = 1;
                mapContext.setTransform(1, 0, 0, 1, 0, 0);
                
                const link = document.getElementById('image-download');
                link.href = mapCanvas.toDataURL();
                link.click();
            });
            map.renderSync();
        }
    });
}

// Upload Tool
function initializeUpload() {
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
            ol.format.GPX,
            ol.format.GeoJSON,
            ol.format.IGC,
            ol.format.KML,
            ol.format.TopoJSON
        ]
    });

    dragAndDrop.on('addfeatures', function(event) {
        const features = event.features;
        uploadSource.addFeatures(features);
        map.getView().fit(uploadSource.getExtent());
    });

    map.addInteraction(dragAndDrop);

    document.getElementById('upload-widget').addEventListener('click', function() {
        alert('Drag and drop GPX, GeoJSON, IGC, KML, or TopoJSON files onto the map to upload them.');
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
