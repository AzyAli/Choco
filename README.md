# Chocó Alliance Web Map

An interactive web mapping application for visualizing and managing data related to the Chocó Alliance project.

## Directory Structure

```
Choco/
├── js/                     # JavaScript files
│   ├── config.js          # Central configuration file
│   └── layers/            # Layer-specific JavaScript
├── css/                   # Stylesheet files
├── data/                  # Map data files
├── styles/                # Layer styles
├── resources/             # External resources and libraries
└── components/           # Reusable HTML components
```

## Adding New Layers

1. Add your layer style file to the `styles/` directory
2. Update the layer configuration in `js/config.js`:
```javascript
layers: [
    {
        id: "your_layer_id",
        name: "Your Layer Name",
        group: "your_group",
        styleFile: "YourLayer_style.js",
        visible: true,
        opacity: 1
    }
]
```

## Updating Layer Styles

1. Locate your layer's style file in the `styles/` directory
2. Update the style properties as needed
3. If creating new symbolization, follow the existing pattern:
```javascript
var style_layername = function(feature, resolution) {
    // Your style definition here
};
```

## Common Tasks

### Adding a New Protected Area
1. Prepare your GeoJSON data
2. Add the style file to `styles/`
3. Update `js/config.js` with the new layer
4. Add any necessary legend items

### Updating Layer Visibility
1. Modify the `visible` property in `js/config.js`
2. Or use the layer switcher in the UI

## Contact

For questions or contributions, please contact  me at this addy a.y.ali@student.utwente.nl
