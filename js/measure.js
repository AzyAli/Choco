import {getLength, getArea} from 'ol/sphere.js';
import Draw from 'ol/interaction/Draw.js';
import {Vector as VectorSource} from 'ol/source.js';
import {Vector as VectorLayer} from 'ol/layer.js';
import {Style, Fill, Stroke, Circle} from 'ol/style.js';
import Overlay from 'ol/Overlay.js';
import {unByKey} from 'ol/Observable.js';

// Measure tool initialization
const measureSource = new VectorSource();
const measureLayer = new VectorLayer({
    source: measureSource,
    style: new Style({
        fill: new Fill({
            color: 'rgba(255, 255, 255, 0.2)'
        }),
        stroke: new Stroke({
            color: '#2E7D32',
            width: 2
        }),
        image: new Circle({
            radius: 7,
            fill: new Fill({
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
    measureTooltip = new Overlay({
        element: measureTooltipElement,
        offset: [0, -15],
        positioning: 'bottom-center',
        stopEvent: false
    });
    map.addOverlay(measureTooltip);
}

function formatLength(line) {
    const length = getLength(line);
    let output;
    if (length > 100) {
        output = Math.round((length / 1000) * 100) / 100 + ' km';
    } else {
        output = Math.round(length * 100) / 100 + ' m';
    }
    return output;
}

function formatArea(polygon) {
    const area = getArea(polygon);
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
    measureDraw = new Draw({
        source: measureSource,
        type: type,
        style: new Style({
            fill: new Fill({
                color: 'rgba(255, 255, 255, 0.2)'
            }),
            stroke: new Stroke({
                color: '#2E7D32',
                width: 2
            }),
            image: new Circle({
                radius: 5,
                stroke: new Stroke({
                    color: '#2E7D32'
                }),
                fill: new Fill({
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
            if (geom instanceof Polygon) {
                output = formatArea(geom);
                tooltipCoord = geom.getInteriorPoint().getCoordinates();
            } else if (geom instanceof LineString) {
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
        unByKey(listener);
    });
});
