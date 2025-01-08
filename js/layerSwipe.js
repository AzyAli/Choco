import {getRenderPixel} from 'ol/render.js';

let swipeLayer;
const swipeControl = document.querySelector('.swipe-control');
const swipe = document.getElementById('swipe');

document.getElementById('swipe-widget').addEventListener('click', function() {
    swipeControl.style.display = swipeControl.style.display === 'none' ? 'block' : 'none';
    
    if (swipeControl.style.display === 'block' && !swipeLayer) {
        // Use the first visible layer as the swipe layer
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
                const tl = getRenderPixel(event, [width, 0]);
                const tr = getRenderPixel(event, [mapSize[0], 0]);
                const bl = getRenderPixel(event, [width, mapSize[1]]);
                const br = getRenderPixel(event, mapSize);

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
