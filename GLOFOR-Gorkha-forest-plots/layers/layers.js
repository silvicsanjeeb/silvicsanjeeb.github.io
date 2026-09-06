var wms_layers = [];


        var lyr_GoogleImage_0 = new ol.layer.Tile({
            'title': 'Google Image',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Plots_1 = new ol.format.GeoJSON();
var features_Plots_1 = format_Plots_1.readFeatures(json_Plots_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plots_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plots_1.addFeatures(features_Plots_1);
var lyr_Plots_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Plots_1, 
                style: style_Plots_1,
                interactive: true,
                title: '<img src="styles/legend/Plots_1.png" /> Plots'
            });
var format_Camp_site_2 = new ol.format.GeoJSON();
var features_Camp_site_2 = format_Camp_site_2.readFeatures(json_Camp_site_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Camp_site_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Camp_site_2.addFeatures(features_Camp_site_2);
var lyr_Camp_site_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Camp_site_2, 
                style: style_Camp_site_2,
                interactive: true,
                title: '<img src="styles/legend/Camp_site_2.png" /> Camp_site'
            });

lyr_GoogleImage_0.setVisible(true);lyr_Plots_1.setVisible(true);lyr_Camp_site_2.setVisible(true);
var layersList = [lyr_GoogleImage_0,lyr_Plots_1,lyr_Camp_site_2];
lyr_Plots_1.set('fieldAliases', {'Name': 'Name', 'Site': 'Site', 'VDCname': 'VDCname', 'CFname': 'CFname', 'Altitude': 'Altitude', 'TerrainSlo': 'TerrainSlo', 'LengthShor': 'LengthShor', 'LengthLong': 'LengthLong', 'LengthDiag': 'LengthDiag', 'Aspect': 'Aspect', 'ForestStra': 'ForestStra', 'ForestType': 'ForestType', 'ForestDesc': 'ForestDesc', 'SoilType': 'SoilType', 'SoilDescri': 'SoilDescri', 'Comments': 'Comments', });
lyr_Camp_site_2.set('fieldAliases', {'Camp': 'Camp', });
lyr_Plots_1.set('fieldImages', {'Name': 'TextEdit', 'Site': 'TextEdit', 'VDCname': 'TextEdit', 'CFname': 'TextEdit', 'Altitude': 'TextEdit', 'TerrainSlo': 'TextEdit', 'LengthShor': 'TextEdit', 'LengthLong': 'TextEdit', 'LengthDiag': 'TextEdit', 'Aspect': 'TextEdit', 'ForestStra': 'TextEdit', 'ForestType': 'TextEdit', 'ForestDesc': 'TextEdit', 'SoilType': 'TextEdit', 'SoilDescri': 'TextEdit', 'Comments': 'TextEdit', });
lyr_Camp_site_2.set('fieldImages', {'Camp': 'TextEdit', });
lyr_Plots_1.set('fieldLabels', {'Name': 'inline label', 'Site': 'inline label', 'VDCname': 'inline label', 'CFname': 'inline label', 'Altitude': 'inline label', 'TerrainSlo': 'inline label', 'LengthShor': 'inline label', 'LengthLong': 'inline label', 'LengthDiag': 'inline label', 'Aspect': 'inline label', 'ForestStra': 'inline label', 'ForestType': 'inline label', 'ForestDesc': 'inline label', 'SoilType': 'inline label', 'SoilDescri': 'inline label', 'Comments': 'inline label', });
lyr_Camp_site_2.set('fieldLabels', {'Camp': 'inline label', });
lyr_Camp_site_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});