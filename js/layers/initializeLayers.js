// Layer initialization for Chocó Alliance Web Map
import mapConfig from '../config.js';
import LayerManager from '../layerManager.js';

export function initializeLayers(map) {
    const layerManager = new LayerManager(map);
    
    // Initialize all layers from config
    const layerConfigs = [
        {
            id: "ecuador",
            name: "Ecuador",
            group: "base",
            styleFile: "Ecuador_7_style.js",
            visible: true
        },
        {
            id: "terrestrial_ecoregions",
            name: "Terrestrial Ecoregions",
            group: "ecological",
            styleFile: "Terrestrial_ecoregions_6_style.js",
            visible: true
        },
        {
            id: "potential_wildlife_corridors",
            name: "Potential Wildlife Corridors",
            group: "ecological",
            styleFile: "Potentialwildlifecorridors_8_style.js",
            visible: true
        },
        {
            id: "rivers",
            name: "Rivers",
            group: "base",
            styleFile: "Rivers_9_style.js",
            visible: true
        },
        {
            id: "mining_concessions_1",
            name: "Mining Concessions 1",
            group: "mining",
            styleFile: "MiningCONCESIONES1_10_style.js",
            visible: false
        },
        // Add all your existing layers here...
    ];

    // Add each layer to the map
    layerConfigs.forEach(config => {
        const layer = layerManager.addLayer(config);
        map.addLayer(layer);
    });

    return layerManager;
}
