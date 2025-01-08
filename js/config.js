// Configuration file for the Chocó Alliance Web Map
const mapConfig = {
    // Default map settings
    defaultSettings: {
        center: [-79.0, 0.5],
        zoom: 8,
        minZoom: 5,
        maxZoom: 20
    },

    // Layer groups configuration
    layerGroups: {
        base: {
            name: "Base Layers",
            visible: true,
            expanded: true
        },
        ecological: {
            name: "Ecological Features",
            visible: true,
            expanded: false
        },
        mining: {
            name: "Mining Concessions",
            visible: false,
            expanded: false
        },
        reserves: {
            name: "Protected Areas",
            visible: true,
            expanded: true
        },
        communities: {
            name: "Communities",
            visible: true,
            expanded: false
        }
    },

    // Layer configuration
    layers: {
        // Base Layers
        base: [
            {
                id: "ecuador",
                name: "Ecuador",
                styleFile: "Ecuador_7_style.js",
                visible: true,
                opacity: 1,
                zIndex: 1
            },
            {
                id: "rivers",
                name: "Rivers",
                styleFile: "Rivers_9_style.js",
                visible: true,
                opacity: 0.8,
                zIndex: 2
            }
        ],

        // Ecological Layers
        ecological: [
            {
                id: "terrestrial_ecoregions",
                name: "Terrestrial Ecoregions",
                styleFile: "Terrestrial_ecoregions_6_style.js",
                visible: true,
                opacity: 0.7,
                zIndex: 3
            },
            {
                id: "potential_wildlife_corridors",
                name: "Wildlife Corridors",
                styleFile: "Potentialwildlifecorridors_8_style.js",
                visible: true,
                opacity: 0.7,
                zIndex: 4
            }
        ],

        // Mining Layers
        mining: [
            {
                id: "mining_concessions_1",
                name: "Mining Concessions North",
                styleFile: "MiningCONCESIONESN_11_style.js",
                visible: false,
                opacity: 0.8,
                zIndex: 10
            },
            {
                id: "mining_concessions_2",
                name: "Mining Concessions South",
                styleFile: "MiningCONCESIONESS_12_style.js",
                visible: false,
                opacity: 0.8,
                zIndex: 11
            }
        ],

        // Protected Areas/Reserves
        reserves: [
            {
                id: "cotocachi_cayapas",
                name: "Cotocachi-Cayapas Ecological Reserve",
                styleFile: "CotocachiCayapasEcologicalReserve_17_style.js",
                visible: true,
                opacity: 0.8,
                zIndex: 5
            },
            {
                id: "mache_chindul",
                name: "Mache-Chindul Reserve",
                styleFile: "MacheChindul_18_style.js",
                visible: true,
                opacity: 0.8,
                zIndex: 6
            },
            {
                id: "los_cedros",
                name: "Los Cedros Reserve",
                styleFile: "LosCedrosReserve_23_style.js",
                visible: true,
                opacity: 0.8,
                zIndex: 7
            },
            {
                id: "dracula_reserves",
                name: "Dracula Reserves",
                subLayers: [
                    {
                        id: "dracula_alta",
                        name: "Dracula Alta",
                        styleFile: "DRACULA_ZONA_ALTA_33_style.js",
                        visible: true,
                        opacity: 0.8,
                        zIndex: 8
                    },
                    {
                        id: "dracula_media",
                        name: "Dracula Media",
                        styleFile: "DRACULA_ZONA_MEDIA_35_style.js",
                        visible: true,
                        opacity: 0.8,
                        zIndex: 8
                    },
                    {
                        id: "dracula_baja",
                        name: "Dracula Baja",
                        styleFile: "DRACULA_ZONA_BAJA_34_style.js",
                        visible: true,
                        opacity: 0.8,
                        zIndex: 8
                    }
                ]
            }
        ],

        // Communities
        communities: [
            {
                id: "indigenous_reserves",
                name: "Indigenous Reserves",
                styleFile: "indigenousreserves_14_style.js",
                visible: true,
                opacity: 0.8,
                zIndex: 9
            },
            {
                id: "communities",
                name: "Local Communities",
                styleFile: "Communities_13_style.js",
                visible: true,
                opacity: 0.8,
                zIndex: 9
            }
        ]
    }
};

export default mapConfig;
