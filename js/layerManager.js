// Layer Manager for Chocó Alliance Web Map
import mapConfig from './config.js';

class LayerManager {
    constructor(map) {
        this.map = map;
        this.layers = new Map();
        this.groups = new Map();
        this.initializeGroups();
    }

    initializeGroups() {
        Object.entries(mapConfig.layerGroups).forEach(([id, group]) => {
            this.groups.set(id, {
                name: group.name,
                visible: group.visible,
                layers: []
            });
        });
    }

    // Add a new layer
    addLayer(layerConfig) {
        const layer = this.createLayer(layerConfig);
        this.layers.set(layerConfig.id, layer);
        this.groups.get(layerConfig.group).layers.push(layer);
        return layer;
    }

    // Create a layer from configuration
    createLayer(config) {
        // Import layer style
        const styleModule = require(`../styles/${config.styleFile}`);
        
        return new ol.layer.Vector({
            source: new ol.source.Vector({
                url: `data/${config.id}.geojson`,
                format: new ol.format.GeoJSON()
            }),
            style: styleModule.style,
            visible: config.visible,
            opacity: config.opacity,
            title: config.name
        });
    }

    // Toggle layer visibility
    toggleLayer(layerId, visible) {
        const layer = this.layers.get(layerId);
        if (layer) {
            layer.setVisible(visible);
        }
    }

    // Update layer style
    updateLayerStyle(layerId, newStyle) {
        const layer = this.layers.get(layerId);
        if (layer) {
            layer.setStyle(newStyle);
        }
    }

    // Get all layers in a group
    getGroupLayers(groupId) {
        return this.groups.get(groupId)?.layers || [];
    }
}

export default LayerManager;
