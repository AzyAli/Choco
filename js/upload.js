import {GPX, GeoJSON, IGC, KML, TopoJSON} from 'ol/format.js';
import {Vector as VectorSource} from 'ol/source.js';
import {Vector as VectorLayer} from 'ol/layer.js';
import DragAndDrop from 'ol/interaction/DragAndDrop.js';

const uploadSource = new VectorSource();
const uploadLayer = new VectorLayer({
    source: uploadSource,
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

map.addLayer(uploadLayer);

const dragAndDrop = new DragAndDrop({
    formatConstructors: [
        GPX,
        GeoJSON,
        IGC,
        KML,
        TopoJSON
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
