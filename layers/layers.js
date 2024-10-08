ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-80.756551, -0.696413, -77.127880, 1.258578]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrain_2 = new ol.layer.Tile({
            'title': 'Google Terrain',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_EsriImagery_3 = new ol.layer.Tile({
            'title': 'Esri Imagery',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_BingSatellite_4 = new ol.layer.Tile({
            'title': 'Bing Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1'
            })
        });

        var lyr_GoogleSatellite_5 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Terrestrial_ecoregions_6 = new ol.format.GeoJSON();
var features_Terrestrial_ecoregions_6 = format_Terrestrial_ecoregions_6.readFeatures(json_Terrestrial_ecoregions_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Terrestrial_ecoregions_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terrestrial_ecoregions_6.addFeatures(features_Terrestrial_ecoregions_6);
var lyr_Terrestrial_ecoregions_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Terrestrial_ecoregions_6, 
                style: style_Terrestrial_ecoregions_6,
                popuplayertitle: "Terrestrial_ecoregions",
                interactive: true,
                title: '<img src="styles/legend/Terrestrial_ecoregions_6.png" /> Terrestrial_ecoregions'
            });
var format_Ecuador_7 = new ol.format.GeoJSON();
var features_Ecuador_7 = format_Ecuador_7.readFeatures(json_Ecuador_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Ecuador_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ecuador_7.addFeatures(features_Ecuador_7);
var lyr_Ecuador_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ecuador_7, 
                style: style_Ecuador_7,
                popuplayertitle: "Ecuador",
                interactive: true,
                title: '<img src="styles/legend/Ecuador_7.png" /> Ecuador'
            });
var format_Potentialwildlifecorridors_8 = new ol.format.GeoJSON();
var features_Potentialwildlifecorridors_8 = format_Potentialwildlifecorridors_8.readFeatures(json_Potentialwildlifecorridors_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Potentialwildlifecorridors_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Potentialwildlifecorridors_8.addFeatures(features_Potentialwildlifecorridors_8);
var lyr_Potentialwildlifecorridors_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Potentialwildlifecorridors_8, 
                style: style_Potentialwildlifecorridors_8,
                popuplayertitle: "Potential wildlife corridors",
                interactive: true,
                title: '<img src="styles/legend/Potentialwildlifecorridors_8.png" /> Potential wildlife corridors'
            });
var format_Rivers_9 = new ol.format.GeoJSON();
var features_Rivers_9 = format_Rivers_9.readFeatures(json_Rivers_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Rivers_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rivers_9.addFeatures(features_Rivers_9);
var lyr_Rivers_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rivers_9, 
                style: style_Rivers_9,
                popuplayertitle: "Rivers",
                interactive: true,
                title: '<img src="styles/legend/Rivers_9.png" /> Rivers'
            });
var format_MiningCONCESIONES1_10 = new ol.format.GeoJSON();
var features_MiningCONCESIONES1_10 = format_MiningCONCESIONES1_10.readFeatures(json_MiningCONCESIONES1_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MiningCONCESIONES1_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MiningCONCESIONES1_10.addFeatures(features_MiningCONCESIONES1_10);
var lyr_MiningCONCESIONES1_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MiningCONCESIONES1_10, 
                style: style_MiningCONCESIONES1_10,
                popuplayertitle: "Mining CONCESIONES 1",
                interactive: true,
                title: '<img src="styles/legend/MiningCONCESIONES1_10.png" /> Mining CONCESIONES 1'
            });
var format_MiningCONCESIONESN_11 = new ol.format.GeoJSON();
var features_MiningCONCESIONESN_11 = format_MiningCONCESIONESN_11.readFeatures(json_MiningCONCESIONESN_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MiningCONCESIONESN_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MiningCONCESIONESN_11.addFeatures(features_MiningCONCESIONESN_11);
var lyr_MiningCONCESIONESN_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MiningCONCESIONESN_11, 
                style: style_MiningCONCESIONESN_11,
                popuplayertitle: "Mining CONCESIONES N",
                interactive: true,
                title: '<img src="styles/legend/MiningCONCESIONESN_11.png" /> Mining CONCESIONES N'
            });
var format_MiningCONCESIONESS_12 = new ol.format.GeoJSON();
var features_MiningCONCESIONESS_12 = format_MiningCONCESIONESS_12.readFeatures(json_MiningCONCESIONESS_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MiningCONCESIONESS_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MiningCONCESIONESS_12.addFeatures(features_MiningCONCESIONESS_12);
var lyr_MiningCONCESIONESS_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MiningCONCESIONESS_12, 
                style: style_MiningCONCESIONESS_12,
                popuplayertitle: "Mining CONCESIONES S",
                interactive: true,
                title: '<img src="styles/legend/MiningCONCESIONESS_12.png" /> Mining CONCESIONES S'
            });
var format_Communities_13 = new ol.format.GeoJSON();
var features_Communities_13 = format_Communities_13.readFeatures(json_Communities_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Communities_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communities_13.addFeatures(features_Communities_13);
var lyr_Communities_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communities_13, 
                style: style_Communities_13,
                popuplayertitle: "Communities",
                interactive: true,
                title: '<img src="styles/legend/Communities_13.png" /> Communities'
            });
var format_indigenousreserves_14 = new ol.format.GeoJSON();
var features_indigenousreserves_14 = format_indigenousreserves_14.readFeatures(json_indigenousreserves_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_indigenousreserves_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_indigenousreserves_14.addFeatures(features_indigenousreserves_14);
var lyr_indigenousreserves_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_indigenousreserves_14, 
                style: style_indigenousreserves_14,
                popuplayertitle: "indigenous reserves",
                interactive: true,
                title: '<img src="styles/legend/indigenousreserves_14.png" /> indigenous reserves'
            });
var format_Acusmit_15 = new ol.format.GeoJSON();
var features_Acusmit_15 = format_Acusmit_15.readFeatures(json_Acusmit_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Acusmit_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Acusmit_15.addFeatures(features_Acusmit_15);
var lyr_Acusmit_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Acusmit_15, 
                style: style_Acusmit_15,
                popuplayertitle: "Acusmit",
                interactive: true,
                title: '<img src="styles/legend/Acusmit_15.png" /> Acusmit'
            });
var format_BOSQUESPROTECTORES_16 = new ol.format.GeoJSON();
var features_BOSQUESPROTECTORES_16 = format_BOSQUESPROTECTORES_16.readFeatures(json_BOSQUESPROTECTORES_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BOSQUESPROTECTORES_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOSQUESPROTECTORES_16.addFeatures(features_BOSQUESPROTECTORES_16);
var lyr_BOSQUESPROTECTORES_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BOSQUESPROTECTORES_16, 
                style: style_BOSQUESPROTECTORES_16,
                popuplayertitle: "BOSQUES PROTECTORES",
                interactive: true,
                title: '<img src="styles/legend/BOSQUESPROTECTORES_16.png" /> BOSQUES PROTECTORES'
            });
var format_CotocachiCayapasEcologicalReserve_17 = new ol.format.GeoJSON();
var features_CotocachiCayapasEcologicalReserve_17 = format_CotocachiCayapasEcologicalReserve_17.readFeatures(json_CotocachiCayapasEcologicalReserve_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CotocachiCayapasEcologicalReserve_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CotocachiCayapasEcologicalReserve_17.addFeatures(features_CotocachiCayapasEcologicalReserve_17);
var lyr_CotocachiCayapasEcologicalReserve_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CotocachiCayapasEcologicalReserve_17, 
                style: style_CotocachiCayapasEcologicalReserve_17,
                popuplayertitle: "Cotocachi Cayapas Ecological Reserve",
                interactive: true,
                title: '<img src="styles/legend/CotocachiCayapasEcologicalReserve_17.png" /> Cotocachi Cayapas Ecological Reserve'
            });
var format_MacheChindul_18 = new ol.format.GeoJSON();
var features_MacheChindul_18 = format_MacheChindul_18.readFeatures(json_MacheChindul_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MacheChindul_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MacheChindul_18.addFeatures(features_MacheChindul_18);
var lyr_MacheChindul_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MacheChindul_18, 
                style: style_MacheChindul_18,
                popuplayertitle: "Mache-Chindul",
                interactive: true,
                title: '<img src="styles/legend/MacheChindul_18.png" /> Mache-Chindul'
            });
var format_Reserva_Biosfera_Choco_19 = new ol.format.GeoJSON();
var features_Reserva_Biosfera_Choco_19 = format_Reserva_Biosfera_Choco_19.readFeatures(json_Reserva_Biosfera_Choco_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Reserva_Biosfera_Choco_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reserva_Biosfera_Choco_19.addFeatures(features_Reserva_Biosfera_Choco_19);
var lyr_Reserva_Biosfera_Choco_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reserva_Biosfera_Choco_19, 
                style: style_Reserva_Biosfera_Choco_19,
                popuplayertitle: "Reserva_Biosfera_Choco",
                interactive: true,
                title: '<img src="styles/legend/Reserva_Biosfera_Choco_19.png" /> Reserva_Biosfera_Choco'
            });
var format_ChachiReserves_20 = new ol.format.GeoJSON();
var features_ChachiReserves_20 = format_ChachiReserves_20.readFeatures(json_ChachiReserves_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ChachiReserves_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChachiReserves_20.addFeatures(features_ChachiReserves_20);
var lyr_ChachiReserves_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChachiReserves_20, 
                style: style_ChachiReserves_20,
                popuplayertitle: "Chachi Reserves",
                interactive: true,
                title: '<img src="styles/legend/ChachiReserves_20.png" /> Chachi Reserves'
            });
var format_JocotocoCanande_21 = new ol.format.GeoJSON();
var features_JocotocoCanande_21 = format_JocotocoCanande_21.readFeatures(json_JocotocoCanande_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JocotocoCanande_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JocotocoCanande_21.addFeatures(features_JocotocoCanande_21);
var lyr_JocotocoCanande_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JocotocoCanande_21, 
                style: style_JocotocoCanande_21,
                popuplayertitle: "Jocotoco - Canande",
                interactive: true,
                title: '<img src="styles/legend/JocotocoCanande_21.png" /> Jocotoco - Canande'
            });
var format_Maquipucuna_22 = new ol.format.GeoJSON();
var features_Maquipucuna_22 = format_Maquipucuna_22.readFeatures(json_Maquipucuna_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Maquipucuna_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Maquipucuna_22.addFeatures(features_Maquipucuna_22);
var lyr_Maquipucuna_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Maquipucuna_22, 
                style: style_Maquipucuna_22,
                popuplayertitle: "Maquipucuna",
                interactive: true,
                title: '<img src="styles/legend/Maquipucuna_22.png" /> Maquipucuna'
            });
var format_LosCedrosReserve_23 = new ol.format.GeoJSON();
var features_LosCedrosReserve_23 = format_LosCedrosReserve_23.readFeatures(json_LosCedrosReserve_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LosCedrosReserve_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LosCedrosReserve_23.addFeatures(features_LosCedrosReserve_23);
var lyr_LosCedrosReserve_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LosCedrosReserve_23, 
                style: style_LosCedrosReserve_23,
                popuplayertitle: "Los Cedros Reserve",
                interactive: true,
                title: '<img src="styles/legend/LosCedrosReserve_23.png" /> Los Cedros Reserve'
            });
var format_MaquipucunaReserve_24 = new ol.format.GeoJSON();
var features_MaquipucunaReserve_24 = format_MaquipucunaReserve_24.readFeatures(json_MaquipucunaReserve_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MaquipucunaReserve_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MaquipucunaReserve_24.addFeatures(features_MaquipucunaReserve_24);
var lyr_MaquipucunaReserve_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MaquipucunaReserve_24, 
                style: style_MaquipucunaReserve_24,
                popuplayertitle: "Maquipucuna Reserve",
                interactive: true,
                title: '<img src="styles/legend/MaquipucunaReserve_24.png" /> Maquipucuna Reserve'
            });
var format_NeblinaReserve_25 = new ol.format.GeoJSON();
var features_NeblinaReserve_25 = format_NeblinaReserve_25.readFeatures(json_NeblinaReserve_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_NeblinaReserve_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NeblinaReserve_25.addFeatures(features_NeblinaReserve_25);
var lyr_NeblinaReserve_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NeblinaReserve_25, 
                style: style_NeblinaReserve_25,
                popuplayertitle: "Neblina Reserve",
                interactive: true,
                title: '<img src="styles/legend/NeblinaReserve_25.png" /> Neblina Reserve'
            });
var format_Ecominga_26 = new ol.format.GeoJSON();
var features_Ecominga_26 = format_Ecominga_26.readFeatures(json_Ecominga_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Ecominga_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ecominga_26.addFeatures(features_Ecominga_26);
var lyr_Ecominga_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ecominga_26, 
                style: style_Ecominga_26,
                popuplayertitle: "Ecominga",
                interactive: true,
                title: '<img src="styles/legend/Ecominga_26.png" /> Ecominga'
            });
var format_TesoroEscondidoReserve_27 = new ol.format.GeoJSON();
var features_TesoroEscondidoReserve_27 = format_TesoroEscondidoReserve_27.readFeatures(json_TesoroEscondidoReserve_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TesoroEscondidoReserve_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TesoroEscondidoReserve_27.addFeatures(features_TesoroEscondidoReserve_27);
var lyr_TesoroEscondidoReserve_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TesoroEscondidoReserve_27, 
                style: style_TesoroEscondidoReserve_27,
                popuplayertitle: "Tesoro Escondido Reserve",
                interactive: true,
                title: '<img src="styles/legend/TesoroEscondidoReserve_27.png" /> Tesoro Escondido Reserve'
            });
var format_TMAPATADEPATAJO_28 = new ol.format.GeoJSON();
var features_TMAPATADEPATAJO_28 = format_TMAPATADEPATAJO_28.readFeatures(json_TMAPATADEPATAJO_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TMAPATADEPATAJO_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TMAPATADEPATAJO_28.addFeatures(features_TMAPATADEPATAJO_28);
var lyr_TMAPATADEPATAJO_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TMAPATADEPATAJO_28, 
                style: style_TMAPATADEPATAJO_28,
                popuplayertitle: "TMA PATA DE PATAJO",
                interactive: true,
                title: '<img src="styles/legend/TMAPATADEPATAJO_28.png" /> TMA PATA DE PATAJO'
            });
var format_TMAJAMACOAQUE_29 = new ol.format.GeoJSON();
var features_TMAJAMACOAQUE_29 = format_TMAJAMACOAQUE_29.readFeatures(json_TMAJAMACOAQUE_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TMAJAMACOAQUE_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TMAJAMACOAQUE_29.addFeatures(features_TMAJAMACOAQUE_29);
var lyr_TMAJAMACOAQUE_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TMAJAMACOAQUE_29, 
                style: style_TMAJAMACOAQUE_29,
                popuplayertitle: "TMA JAMA COAQUE",
                interactive: true,
                title: '<img src="styles/legend/TMAJAMACOAQUE_29.png" /> TMA JAMA COAQUE'
            });
var format_FCATBilsa_30 = new ol.format.GeoJSON();
var features_FCATBilsa_30 = format_FCATBilsa_30.readFeatures(json_FCATBilsa_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FCATBilsa_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FCATBilsa_30.addFeatures(features_FCATBilsa_30);
var lyr_FCATBilsa_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FCATBilsa_30, 
                style: style_FCATBilsa_30,
                popuplayertitle: "FCAT - Bilsa",
                interactive: true,
                title: '<img src="styles/legend/FCATBilsa_30.png" /> FCAT - Bilsa'
            });
var format_FCATReserve_31 = new ol.format.GeoJSON();
var features_FCATReserve_31 = format_FCATReserve_31.readFeatures(json_FCATReserve_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FCATReserve_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FCATReserve_31.addFeatures(features_FCATReserve_31);
var lyr_FCATReserve_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FCATReserve_31, 
                style: style_FCATReserve_31,
                popuplayertitle: "FCAT - Reserve",
                interactive: true,
                title: '<img src="styles/legend/FCATReserve_31.png" /> FCAT - Reserve'
            });
var format_LA_ESPERANZA_32 = new ol.format.GeoJSON();
var features_LA_ESPERANZA_32 = format_LA_ESPERANZA_32.readFeatures(json_LA_ESPERANZA_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LA_ESPERANZA_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LA_ESPERANZA_32.addFeatures(features_LA_ESPERANZA_32);
var lyr_LA_ESPERANZA_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LA_ESPERANZA_32, 
                style: style_LA_ESPERANZA_32,
                popuplayertitle: "LA_ESPERANZA",
                interactive: true,
                title: '<img src="styles/legend/LA_ESPERANZA_32.png" /> LA_ESPERANZA'
            });
var format_DRACULA_ZONA_ALTA_33 = new ol.format.GeoJSON();
var features_DRACULA_ZONA_ALTA_33 = format_DRACULA_ZONA_ALTA_33.readFeatures(json_DRACULA_ZONA_ALTA_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DRACULA_ZONA_ALTA_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRACULA_ZONA_ALTA_33.addFeatures(features_DRACULA_ZONA_ALTA_33);
var lyr_DRACULA_ZONA_ALTA_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRACULA_ZONA_ALTA_33, 
                style: style_DRACULA_ZONA_ALTA_33,
                popuplayertitle: "DRACULA_ZONA_ALTA",
                interactive: true,
                title: '<img src="styles/legend/DRACULA_ZONA_ALTA_33.png" /> DRACULA_ZONA_ALTA'
            });
var format_DRACULA_ZONA_BAJA_34 = new ol.format.GeoJSON();
var features_DRACULA_ZONA_BAJA_34 = format_DRACULA_ZONA_BAJA_34.readFeatures(json_DRACULA_ZONA_BAJA_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DRACULA_ZONA_BAJA_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRACULA_ZONA_BAJA_34.addFeatures(features_DRACULA_ZONA_BAJA_34);
var lyr_DRACULA_ZONA_BAJA_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRACULA_ZONA_BAJA_34, 
                style: style_DRACULA_ZONA_BAJA_34,
                popuplayertitle: "DRACULA_ZONA_BAJA",
                interactive: true,
                title: '<img src="styles/legend/DRACULA_ZONA_BAJA_34.png" /> DRACULA_ZONA_BAJA'
            });
var format_DRACULA_ZONA_MEDIA_35 = new ol.format.GeoJSON();
var features_DRACULA_ZONA_MEDIA_35 = format_DRACULA_ZONA_MEDIA_35.readFeatures(json_DRACULA_ZONA_MEDIA_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DRACULA_ZONA_MEDIA_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRACULA_ZONA_MEDIA_35.addFeatures(features_DRACULA_ZONA_MEDIA_35);
var lyr_DRACULA_ZONA_MEDIA_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRACULA_ZONA_MEDIA_35, 
                style: style_DRACULA_ZONA_MEDIA_35,
                popuplayertitle: "DRACULA_ZONA_MEDIA",
                interactive: true,
                title: '<img src="styles/legend/DRACULA_ZONA_MEDIA_35.png" /> DRACULA_ZONA_MEDIA'
            });
var format_Cuellaje_reservas_36 = new ol.format.GeoJSON();
var features_Cuellaje_reservas_36 = format_Cuellaje_reservas_36.readFeatures(json_Cuellaje_reservas_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Cuellaje_reservas_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuellaje_reservas_36.addFeatures(features_Cuellaje_reservas_36);
var lyr_Cuellaje_reservas_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cuellaje_reservas_36, 
                style: style_Cuellaje_reservas_36,
                popuplayertitle: "Cuellaje_reservas",
                interactive: true,
                title: '<img src="styles/legend/Cuellaje_reservas_36.png" /> Cuellaje_reservas'
            });
var format_Apuela_reservas_37 = new ol.format.GeoJSON();
var features_Apuela_reservas_37 = format_Apuela_reservas_37.readFeatures(json_Apuela_reservas_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Apuela_reservas_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Apuela_reservas_37.addFeatures(features_Apuela_reservas_37);
var lyr_Apuela_reservas_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Apuela_reservas_37, 
                style: style_Apuela_reservas_37,
                popuplayertitle: "Apuela_reservas",
                interactive: true,
                title: '<img src="styles/legend/Apuela_reservas_37.png" /> Apuela_reservas'
            });
var format_Penaherrera_reservas_38 = new ol.format.GeoJSON();
var features_Penaherrera_reservas_38 = format_Penaherrera_reservas_38.readFeatures(json_Penaherrera_reservas_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Penaherrera_reservas_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Penaherrera_reservas_38.addFeatures(features_Penaherrera_reservas_38);
var lyr_Penaherrera_reservas_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Penaherrera_reservas_38, 
                style: style_Penaherrera_reservas_38,
                popuplayertitle: "Penaherrera_reservas",
                interactive: true,
                title: '<img src="styles/legend/Penaherrera_reservas_38.png" /> Penaherrera_reservas'
            });
var format_GarciaMoreno_reservas_39 = new ol.format.GeoJSON();
var features_GarciaMoreno_reservas_39 = format_GarciaMoreno_reservas_39.readFeatures(json_GarciaMoreno_reservas_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GarciaMoreno_reservas_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GarciaMoreno_reservas_39.addFeatures(features_GarciaMoreno_reservas_39);
var lyr_GarciaMoreno_reservas_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GarciaMoreno_reservas_39, 
                style: style_GarciaMoreno_reservas_39,
                popuplayertitle: "GarciaMoreno_reservas",
                interactive: true,
                title: '<img src="styles/legend/GarciaMoreno_reservas_39.png" /> GarciaMoreno_reservas'
            });
var format_VacasGalindo_reservas_40 = new ol.format.GeoJSON();
var features_VacasGalindo_reservas_40 = format_VacasGalindo_reservas_40.readFeatures(json_VacasGalindo_reservas_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_VacasGalindo_reservas_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VacasGalindo_reservas_40.addFeatures(features_VacasGalindo_reservas_40);
var lyr_VacasGalindo_reservas_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VacasGalindo_reservas_40, 
                style: style_VacasGalindo_reservas_40,
                popuplayertitle: "VacasGalindo_reservas",
                interactive: true,
                title: '<img src="styles/legend/VacasGalindo_reservas_40.png" /> VacasGalindo_reservas'
            });
var group_Alliance_members = new ol.layer.Group({
                                layers: [lyr_Ecominga_26,lyr_TesoroEscondidoReserve_27,lyr_TMAPATADEPATAJO_28,lyr_TMAJAMACOAQUE_29,lyr_FCATBilsa_30,lyr_FCATReserve_31,lyr_LA_ESPERANZA_32,lyr_DRACULA_ZONA_ALTA_33,lyr_DRACULA_ZONA_BAJA_34,lyr_DRACULA_ZONA_MEDIA_35,lyr_Cuellaje_reservas_36,lyr_Apuela_reservas_37,lyr_Penaherrera_reservas_38,lyr_GarciaMoreno_reservas_39,lyr_VacasGalindo_reservas_40,],
                                fold: "open",
                                title: "Alliance_members"});
var group_Other_Reserves = new ol.layer.Group({
                                layers: [lyr_ChachiReserves_20,lyr_JocotocoCanande_21,lyr_Maquipucuna_22,lyr_LosCedrosReserve_23,lyr_MaquipucunaReserve_24,lyr_NeblinaReserve_25,],
                                fold: "open",
                                title: "Other_Reserves"});
var group_Protected_Areas = new ol.layer.Group({
                                layers: [lyr_Acusmit_15,lyr_BOSQUESPROTECTORES_16,lyr_CotocachiCayapasEcologicalReserve_17,lyr_MacheChindul_18,lyr_Reserva_Biosfera_Choco_19,],
                                fold: "open",
                                title: "Protected_Areas"});
var group_Communities_and_Indig_Res = new ol.layer.Group({
                                layers: [lyr_Communities_13,lyr_indigenousreserves_14,],
                                fold: "open",
                                title: "Communities_and _Indig_Res"});
var group_Mining = new ol.layer.Group({
                                layers: [lyr_MiningCONCESIONES1_10,lyr_MiningCONCESIONESN_11,lyr_MiningCONCESIONESS_12,],
                                fold: "open",
                                title: "Mining"});

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_GoogleTerrain_2.setVisible(true);lyr_EsriImagery_3.setVisible(true);lyr_BingSatellite_4.setVisible(true);lyr_GoogleSatellite_5.setVisible(true);lyr_Terrestrial_ecoregions_6.setVisible(false);lyr_Ecuador_7.setVisible(true);lyr_Potentialwildlifecorridors_8.setVisible(false);lyr_Rivers_9.setVisible(false);lyr_MiningCONCESIONES1_10.setVisible(false);lyr_MiningCONCESIONESN_11.setVisible(false);lyr_MiningCONCESIONESS_12.setVisible(false);lyr_Communities_13.setVisible(true);lyr_indigenousreserves_14.setVisible(true);lyr_Acusmit_15.setVisible(false);lyr_BOSQUESPROTECTORES_16.setVisible(true);lyr_CotocachiCayapasEcologicalReserve_17.setVisible(false);lyr_MacheChindul_18.setVisible(false);lyr_Reserva_Biosfera_Choco_19.setVisible(true);lyr_ChachiReserves_20.setVisible(true);lyr_JocotocoCanande_21.setVisible(true);lyr_Maquipucuna_22.setVisible(true);lyr_LosCedrosReserve_23.setVisible(true);lyr_MaquipucunaReserve_24.setVisible(true);lyr_NeblinaReserve_25.setVisible(true);lyr_Ecominga_26.setVisible(true);lyr_TesoroEscondidoReserve_27.setVisible(true);lyr_TMAPATADEPATAJO_28.setVisible(true);lyr_TMAJAMACOAQUE_29.setVisible(true);lyr_FCATBilsa_30.setVisible(true);lyr_FCATReserve_31.setVisible(true);lyr_LA_ESPERANZA_32.setVisible(true);lyr_DRACULA_ZONA_ALTA_33.setVisible(true);lyr_DRACULA_ZONA_BAJA_34.setVisible(true);lyr_DRACULA_ZONA_MEDIA_35.setVisible(true);lyr_Cuellaje_reservas_36.setVisible(true);lyr_Apuela_reservas_37.setVisible(true);lyr_Penaherrera_reservas_38.setVisible(true);lyr_GarciaMoreno_reservas_39.setVisible(true);lyr_VacasGalindo_reservas_40.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatelliteHybrid_1,lyr_GoogleTerrain_2,lyr_EsriImagery_3,lyr_BingSatellite_4,lyr_GoogleSatellite_5,lyr_Terrestrial_ecoregions_6,lyr_Ecuador_7,lyr_Potentialwildlifecorridors_8,lyr_Rivers_9,group_Mining,group_Communities_and_Indig_Res,group_Protected_Areas,group_Other_Reserves,group_Alliance_members];
lyr_Terrestrial_ecoregions_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'ECO_NAME': 'ECO_NAME', 'REALM': 'REALM', 'BIOME': 'BIOME', 'ECO_NUM': 'ECO_NUM', 'ECO_ID': 'ECO_ID', 'ECO_SYM': 'ECO_SYM', 'GBL_STAT': 'GBL_STAT', 'G200_REGIO': 'G200_REGIO', 'G200_NUM': 'G200_NUM', 'G200_BIOME': 'G200_BIOME', 'G200_STAT': 'G200_STAT', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'area_km2': 'area_km2', 'eco_code': 'eco_code', 'PER_area': 'PER_area', 'PER_area_1': 'PER_area_1', 'PER_area_2': 'PER_area_2', });
lyr_Ecuador_7.set('fieldAliases', {'name': 'name', });
lyr_Potentialwildlifecorridors_8.set('fieldAliases', {'Corri_ID': 'Corri_ID', 'Area_km2': 'Area_km2', });
lyr_Rivers_9.set('fieldAliases', {'HYRIV_ID': 'HYRIV_ID', 'NEXT_DOWN': 'NEXT_DOWN', 'MAIN_RIV': 'MAIN_RIV', 'LENGTH_KM': 'LENGTH_KM', 'DIST_DN_KM': 'DIST_DN_KM', 'DIST_UP_KM': 'DIST_UP_KM', 'CATCH_SKM': 'CATCH_SKM', 'UPLAND_SKM': 'UPLAND_SKM', 'ENDORHEIC': 'ENDORHEIC', 'DIS_AV_CMS': 'DIS_AV_CMS', 'ORD_STRA': 'ORD_STRA', 'ORD_CLAS': 'ORD_CLAS', 'ORD_FLOW': 'ORD_FLOW', 'HYBAS_L12': 'HYBAS_L12', });
lyr_MiningCONCESIONES1_10.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_MiningCONCESIONESN_11.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_MiningCONCESIONESS_12.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Communities_13.set('fieldAliases', {'fid': 'fid', 'Community': 'Community', 'Area': 'Area', 'Name': 'Name', });
lyr_indigenousreserves_14.set('fieldAliases', {'fid': 'fid', 'Community': 'Community', 'Area': 'Area', 'Name': 'Name', });
lyr_Acusmit_15.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_BOSQUESPROTECTORES_16.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_CotocachiCayapasEcologicalReserve_17.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_MacheChindul_18.set('fieldAliases', {'fid': 'fid', 'cod_area_m': 'cod_area_m', 'cod_area_c': 'cod_area_c', 'nombre': 'nombre', 'cmap': 'cmap', 'cmap_etiq': 'cmap_etiq', 'cmap_desc': 'cmap_desc', 'paisaje': 'paisaje', 'paisaje_et': 'paisaje_et', 'arl': 'arl', 'esc': 'esc', 'ro_cr_ac_m': 'ro_cr_ac_m', 'r_o_modifi': 'r_o_modifi', 'desc_fecha': 'desc_fecha', 'name': 'name', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_Reserva_Biosfera_Choco_19.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ChachiReserves_20.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Area': 'Area', });
lyr_JocotocoCanande_21.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Area ': 'Area ', });
lyr_Maquipucuna_22.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Area': 'Area', });
lyr_LosCedrosReserve_23.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Los Cedros': 'Los Cedros', 'Area': 'Area', 'Name': 'Name', });
lyr_MaquipucunaReserve_24.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Maquipucna': 'Maquipucna', 'Area': 'Area', });
lyr_NeblinaReserve_25.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Neblina': 'Neblina', 'Area': 'Area', });
lyr_Ecominga_26.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', });
lyr_TesoroEscondidoReserve_27.set('fieldAliases', {'fld': 'fld', 'Propietari': 'Propietari', 'No': 'No', 'Area': 'Area', 'Escritura': 'Escritura', 'Prop_Camb': 'Prop_Camb', 'A_Nueva': 'A_Nueva', 'Name': 'Name', });
lyr_TMAPATADEPATAJO_28.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TMAJAMACOAQUE_29.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_FCATBilsa_30.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Name1': 'Name1', 'Name long': 'Name long', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'area': 'area', });
lyr_FCATReserve_31.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'area': 'area', 'layer': 'layer', 'path': 'path', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_LA_ESPERANZA_32.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_DRACULA_ZONA_ALTA_33.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_DRACULA_ZONA_BAJA_34.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_DRACULA_ZONA_MEDIA_35.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_Cuellaje_reservas_36.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Apuela_reservas_37.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Penaherrera_reservas_38.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_GarciaMoreno_reservas_39.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_VacasGalindo_reservas_40.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Terrestrial_ecoregions_6.set('fieldImages', {'OBJECTID': 'Hidden', 'AREA': 'Hidden', 'PERIMETER': 'Hidden', 'ECO_NAME': 'TextEdit', 'REALM': 'Hidden', 'BIOME': 'Hidden', 'ECO_NUM': 'Hidden', 'ECO_ID': 'Hidden', 'ECO_SYM': 'Hidden', 'GBL_STAT': 'Hidden', 'G200_REGIO': 'Hidden', 'G200_NUM': 'Hidden', 'G200_BIOME': 'Hidden', 'G200_STAT': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'area_km2': 'Hidden', 'eco_code': 'Hidden', 'PER_area': 'Hidden', 'PER_area_1': 'Hidden', 'PER_area_2': 'Hidden', });
lyr_Ecuador_7.set('fieldImages', {'name': 'Hidden', });
lyr_Potentialwildlifecorridors_8.set('fieldImages', {'Corri_ID': 'Hidden', 'Area_km2': 'TextEdit', });
lyr_Rivers_9.set('fieldImages', {'HYRIV_ID': 'Hidden', 'NEXT_DOWN': 'Hidden', 'MAIN_RIV': 'Hidden', 'LENGTH_KM': 'Hidden', 'DIST_DN_KM': 'Hidden', 'DIST_UP_KM': 'Hidden', 'CATCH_SKM': 'Hidden', 'UPLAND_SKM': 'Hidden', 'ENDORHEIC': 'Hidden', 'DIS_AV_CMS': 'Hidden', 'ORD_STRA': 'Hidden', 'ORD_CLAS': 'Hidden', 'ORD_FLOW': 'Hidden', 'HYBAS_L12': 'Hidden', });
lyr_MiningCONCESIONES1_10.set('fieldImages', {'Name': 'Hidden', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_MiningCONCESIONESN_11.set('fieldImages', {'Name': 'Hidden', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_MiningCONCESIONESS_12.set('fieldImages', {'Name': 'Hidden', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Communities_13.set('fieldImages', {'fid': 'Hidden', 'Community': 'Hidden', 'Area': 'TextEdit', 'Name': 'TextEdit', });
lyr_indigenousreserves_14.set('fieldImages', {'fid': 'Hidden', 'Community': 'Hidden', 'Area': 'TextEdit', 'Name': 'TextEdit', });
lyr_Acusmit_15.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', 'snippet': 'Hidden', });
lyr_BOSQUESPROTECTORES_16.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', 'snippet': 'Hidden', });
lyr_CotocachiCayapasEcologicalReserve_17.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_MacheChindul_18.set('fieldImages', {'fid': 'Hidden', 'cod_area_m': 'Hidden', 'cod_area_c': 'Hidden', 'nombre': 'Hidden', 'cmap': 'Hidden', 'cmap_etiq': 'Hidden', 'cmap_desc': 'Hidden', 'paisaje': 'Hidden', 'paisaje_et': 'Hidden', 'arl': 'Hidden', 'esc': 'Hidden', 'ro_cr_ac_m': 'Hidden', 'r_o_modifi': 'Hidden', 'desc_fecha': 'Hidden', 'name': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_Reserva_Biosfera_Choco_19.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_ChachiReserves_20.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', 'Area': 'TextEdit', });
lyr_JocotocoCanande_21.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'Area ': 'TextEdit', });
lyr_Maquipucuna_22.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', 'Area': 'TextEdit', });
lyr_LosCedrosReserve_23.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'Los Cedros': 'Hidden', 'Area': 'TextEdit', 'Name': 'TextEdit', });
lyr_MaquipucunaReserve_24.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'Maquipucna': 'TextEdit', 'Area': 'TextEdit', });
lyr_NeblinaReserve_25.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'Neblina': 'TextEdit', 'Area': 'TextEdit', });
lyr_Ecominga_26.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'Name': 'TextEdit', });
lyr_TesoroEscondidoReserve_27.set('fieldImages', {'fld': 'Hidden', 'Propietari': 'Hidden', 'No': 'Hidden', 'Area': 'Hidden', 'Escritura': 'Hidden', 'Prop_Camb': 'Hidden', 'A_Nueva': 'Hidden', 'Name': 'TextEdit', });
lyr_TMAPATADEPATAJO_28.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_TMAJAMACOAQUE_29.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_FCATBilsa_30.set('fieldImages', {'fid': 'Hidden', 'Id': 'Hidden', 'Name1': 'Hidden', 'Name long': 'TextEdit', 'auxiliary_storage_labeling_positiony': 'Hidden', 'area': 'Hidden', });
lyr_FCATReserve_31.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', 'area': 'Hidden', 'layer': 'Hidden', 'path': 'Hidden', 'cmt': 'Hidden', 'desc': 'Hidden', 'src': 'Hidden', 'link1_href': 'Hidden', 'link1_text': 'Hidden', 'link1_type': 'Hidden', 'link2_href': 'Hidden', 'link2_text': 'Hidden', 'link2_type': 'Hidden', 'number': 'Hidden', 'type': 'Hidden', 'gpxx_TrackExtension': 'Hidden', 'gpxtrkx_TrackStatsExtension': 'Hidden', });
lyr_LA_ESPERANZA_32.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', 'snippet': 'Hidden', });
lyr_DRACULA_ZONA_ALTA_33.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', 'snippet': 'Hidden', });
lyr_DRACULA_ZONA_BAJA_34.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', 'snippet': 'Hidden', });
lyr_DRACULA_ZONA_MEDIA_35.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', 'snippet': 'Hidden', });
lyr_Cuellaje_reservas_36.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Apuela_reservas_37.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Penaherrera_reservas_38.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_GarciaMoreno_reservas_39.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_VacasGalindo_reservas_40.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Terrestrial_ecoregions_6.set('fieldLabels', {'ECO_NAME': 'inline label - visible with data', });
lyr_Ecuador_7.set('fieldLabels', {});
lyr_Potentialwildlifecorridors_8.set('fieldLabels', {'Area_km2': 'inline label - visible with data', });
lyr_Rivers_9.set('fieldLabels', {});
lyr_MiningCONCESIONES1_10.set('fieldLabels', {});
lyr_MiningCONCESIONESN_11.set('fieldLabels', {});
lyr_MiningCONCESIONESS_12.set('fieldLabels', {});
lyr_Communities_13.set('fieldLabels', {'Area': 'inline label - visible with data', 'Name': 'inline label - visible with data', });
lyr_indigenousreserves_14.set('fieldLabels', {'Area': 'inline label - visible with data', 'Name': 'inline label - visible with data', });
lyr_Acusmit_15.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_BOSQUESPROTECTORES_16.set('fieldLabels', {'Name': 'header label - visible with data', });
lyr_CotocachiCayapasEcologicalReserve_17.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_MacheChindul_18.set('fieldLabels', {'name': 'inline label - visible with data', });
lyr_Reserva_Biosfera_Choco_19.set('fieldLabels', {'Name': 'header label - visible with data', });
lyr_ChachiReserves_20.set('fieldLabels', {'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_JocotocoCanande_21.set('fieldLabels', {'Name': 'inline label - visible with data', 'Area ': 'inline label - visible with data', });
lyr_Maquipucuna_22.set('fieldLabels', {'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_LosCedrosReserve_23.set('fieldLabels', {'Area': 'inline label - visible with data', 'Name': 'inline label - visible with data', });
lyr_MaquipucunaReserve_24.set('fieldLabels', {'Maquipucna': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_NeblinaReserve_25.set('fieldLabels', {'Neblina': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_Ecominga_26.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_TesoroEscondidoReserve_27.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_TMAPATADEPATAJO_28.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_TMAJAMACOAQUE_29.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_FCATBilsa_30.set('fieldLabels', {'Name long': 'inline label - visible with data', });
lyr_FCATReserve_31.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_LA_ESPERANZA_32.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_DRACULA_ZONA_ALTA_33.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_DRACULA_ZONA_BAJA_34.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_DRACULA_ZONA_MEDIA_35.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_Cuellaje_reservas_36.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_Apuela_reservas_37.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_Penaherrera_reservas_38.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_GarciaMoreno_reservas_39.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_VacasGalindo_reservas_40.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_VacasGalindo_reservas_40.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});