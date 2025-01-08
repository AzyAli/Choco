import Draw from 'ol/interaction/Draw.js';
import {Vector as VectorSource} from 'ol/source.js';
import {Vector as VectorLayer} from 'ol/layer.js';
import {Style, Fill, Stroke, Circle} from 'ol/style.js';

const drawSource = new VectorSource({wrapX: false});
const drawLayer = new VectorLayer({
    source: drawSource,
    style: new Style({
        fill: new Fill({
            color: 'rgba(46, 125, 50, 0.2)'
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

map.addLayer(drawLayer);

let draw;

document.getElementById('draw-widget').addEventListener('click', function() {
    const drawType = document.getElementById('draw-type');
    drawType.style.display = drawType.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('draw-type').addEventListener('change', function(e) {
    map.removeInteraction(draw);
    
    if (e.target.value === 'None') return;
    
    draw = new Draw({
        source: drawSource,
        type: e.target.value
    });
    
    map.addInteraction(draw);
});
