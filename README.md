# The Chocó Alliance Web Map

An interactive web map application for visualizing and analyzing geographical data in the Chocó region.

## Features

- **Interactive Map Layers**: Multiple layers including terrestrial ecoregions, mining concessions, communities, indigenous reserves, and protected areas
- **Base Maps**: OpenStreetMap, Google Satellite, and Google Terrain options
- **Measurement Tools**: Measure distances and areas with accurate geodesic calculations
- **Drawing Tools**: Create points, lines, polygons, and circles on the map
- **Layer Swipe**: Compare two layers using a swipe interaction
- **Export Capability**: Save the current map view as a PNG image
- **Data Upload**: Drag and drop GeoJSON, KML, or GPX files onto the map

## Directory Structure

```
Choco/
├── css/
│   └── main.css              # Custom styles for the application
├── js/
│   ├── widgets.js            # Widget functionality (measure, draw, swipe, etc.)
│   ├── config.js             # Configuration settings
│   ├── layerManager.js       # Layer management functionality
│   └── styles/
│       └── styleManager.js   # Layer styling definitions
├── layers/                   # Layer data files
│   ├── layers.js            # Layer configuration
│   └── [layer_name].js      # Individual layer files
├── resources/               # Third-party libraries and resources
│   ├── ol.js               # OpenLayers library
│   ├── ol.css              # OpenLayers styles
│   └── [other_resources]   # Additional resources
├── styles/                 # Layer style files
│   └── [layer_name]_style.js
├── index.html             # Main application file
├── favicon.ico            # Website favicon
└── Logo-Stacked.png      # Chocó Alliance logo
```

## Usage

1. **Layer Management**:
   - Use the layer switcher on the right to toggle layers
   - Organize layers by category (Base Maps, Protected Areas, etc.)

2. **Measurement**:
   - Click the ruler icon to activate measurement tool
   - Choose between length and area measurement
   - Click points to measure, double-click to finish

3. **Drawing**:
   - Click the pencil icon to activate drawing tool
   - Select shape type (point, line, polygon, circle)
   - Click to draw, double-click to finish

4. **Layer Swipe**:
   - Click the exchange icon to activate layer swipe
   - Use the slider to compare layers
   - Works with the topmost visible layer

5. **Export Map**:
   - Click the download icon to save current view
   - Map will be saved as PNG image

6. **Upload Data**:
   - Click the upload icon for instructions
   - Drag and drop supported files onto the map
   - Supported formats: GeoJSON, KML, GPX

## Development

The application is built using:
- OpenLayers 6.x
- HTML5/CSS3
- JavaScript (ES6+)
- FontAwesome for icons

## Credits

Created by [AzyAli](https://nl.linkedin.com/in/abdulaziz-yusuf-ali) for The Chocó Alliance.

## License

Copyright 2025 The Chocó Alliance. All rights reserved.
