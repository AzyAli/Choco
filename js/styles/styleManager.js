// Style Manager for Chocó Alliance Web Map
import mapConfig from '../config.js';

class StyleManager {
    constructor() {
        this.styles = new Map();
        this.defaultStyles = {
            stroke: {
                color: '#3399CC',
                width: 1.5
            },
            fill: {
                color: 'rgba(51, 153, 204, 0.2)'
            }
        };
    }

    // Get style for a layer
    getStyle(layerId, feature) {
        const style = this.styles.get(layerId);
        if (!style) {
            console.warn(`No style found for layer ${layerId}, using default`);
            return this.getDefaultStyle();
        }
        return style(feature);
    }

    // Register a new style
    registerStyle(layerId, styleFunction) {
        this.styles.set(layerId, styleFunction);
    }

    // Get default style
    getDefaultStyle() {
        return new ol.style.Style({
            stroke: new ol.style.Stroke(this.defaultStyles.stroke),
            fill: new ol.style.Fill(this.defaultStyles.fill)
        });
    }

    // Create style for protected areas
    createProtectedAreaStyle(color, opacity = 0.6) {
        return (feature) => {
            return new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: color,
                    width: 2
                }),
                fill: new ol.style.Fill({
                    color: `rgba(${this.hexToRgb(color)},${opacity})`
                })
            });
        };
    }

    // Helper function to convert hex to rgb
    hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? 
            `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}` : 
            '0,0,0';
    }

    // Initialize styles for all layers
    initializeStyles() {
        // Initialize base layers
        this.initializeBaseStyles();
        
        // Initialize ecological layers
        this.initializeEcologicalStyles();
        
        // Initialize mining layers
        this.initializeMiningStyles();
        
        // Initialize reserve layers
        this.initializeReserveStyles();
        
        // Initialize community layers
        this.initializeCommunityStyles();
    }

    // Initialize base layer styles
    initializeBaseStyles() {
        // Ecuador style
        this.registerStyle('ecuador', () => {
            return new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: '#000000',
                    width: 1
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(255,255,255,0.1)'
                })
            });
        });

        // Rivers style
        this.registerStyle('rivers', () => {
            return new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: '#0066CC',
                    width: 1.5
                })
            });
        });
    }

    // Initialize ecological layer styles
    initializeEcologicalStyles() {
        // Terrestrial ecoregions
        this.registerStyle('terrestrial_ecoregions', 
            this.createProtectedAreaStyle('#228B22', 0.4));
        
        // Wildlife corridors
        this.registerStyle('potential_wildlife_corridors',
            this.createProtectedAreaStyle('#006400', 0.3));
    }

    // Initialize mining layer styles
    initializeMiningStyles() {
        const miningStyle = (feature) => {
            return new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: '#FF4500',
                    width: 1
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(255,69,0,0.4)'
                })
            });
        };

        this.registerStyle('mining_concessions_1', miningStyle);
        this.registerStyle('mining_concessions_2', miningStyle);
    }

    // Initialize reserve layer styles
    initializeReserveStyles() {
        // Different colors for different reserves
        const reserveColors = {
            cotocachi_cayapas: '#006400',
            mache_chindul: '#228B22',
            los_cedros: '#32CD32',
            dracula_alta: '#90EE90',
            dracula_media: '#98FB98',
            dracula_baja: '#8FBC8F'
        };

        Object.entries(reserveColors).forEach(([id, color]) => {
            this.registerStyle(id, this.createProtectedAreaStyle(color));
        });
    }

    // Initialize community layer styles
    initializeCommunityStyles() {
        // Indigenous reserves
        this.registerStyle('indigenous_reserves', 
            this.createProtectedAreaStyle('#8B4513', 0.3));
        
        // Communities
        this.registerStyle('communities', (feature) => {
            return new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 6,
                    fill: new ol.style.Fill({
                        color: '#CD853F'
                    }),
                    stroke: new ol.style.Stroke({
                        color: '#8B4513',
                        width: 2
                    })
                })
            });
        });
    }
}

export default StyleManager;
