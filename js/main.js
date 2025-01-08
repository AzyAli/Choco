// Main JavaScript file for Chocó Alliance Web Map
import mapConfig from './config.js';
import { initializeLayers } from './layers/initializeLayers.js';

// Initialize the map
function initializeMap() {
    const map = new ol.Map({
        target: 'map',
        layers: [],
        view: new ol.View({
            center: ol.proj.fromLonLat(mapConfig.defaultSettings.center),
            zoom: mapConfig.defaultSettings.zoom,
            minZoom: mapConfig.defaultSettings.minZoom,
            maxZoom: mapConfig.defaultSettings.maxZoom
        })
    });

    // Initialize layer manager and layers
    const layerManager = initializeLayers(map);

    // Initialize controls
    initializeControls(map, layerManager);

    return { map, layerManager };
}

// Initialize map controls
function initializeControls(map, layerManager) {
    // Add layer switcher
    const layerSwitcher = new ol.control.LayerSwitcher({
        tipLabel: 'Layers',
        groupSelectStyle: 'group'
    });
    map.addControl(layerSwitcher);

    // Add scale line
    const scaleLine = new ol.control.ScaleLine();
    map.addControl(scaleLine);

    // Add zoom controls
    const zoom = new ol.control.Zoom();
    map.addControl(zoom);

    // Add mouse position
    const mousePosition = new ol.control.MousePosition({
        coordinateFormat: ol.coordinate.createStringXY(4),
        projection: 'EPSG:4326'
    });
    map.addControl(mousePosition);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const { map, layerManager } = initializeMap();
    
    // Make instances available globally if needed
    window.map = map;
    window.layerManager = layerManager;
});
