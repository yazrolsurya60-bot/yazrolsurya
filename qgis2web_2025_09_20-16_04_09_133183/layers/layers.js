var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleTerrain_1 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BatasKecamatan_3 = new ol.format.GeoJSON();
var features_BatasKecamatan_3 = format_BatasKecamatan_3.readFeatures(json_BatasKecamatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_3.addFeatures(features_BatasKecamatan_3);
var lyr_BatasKecamatan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKecamatan_3, 
                style: style_BatasKecamatan_3,
                popuplayertitle: 'Batas Kecamatan',
                interactive: true,
                title: '<img src="styles/legend/BatasKecamatan_3.png" /> Batas Kecamatan'
            });
var format_JaringanJalan_4 = new ol.format.GeoJSON();
var features_JaringanJalan_4 = format_JaringanJalan_4.readFeatures(json_JaringanJalan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalan_4.addFeatures(features_JaringanJalan_4);
var lyr_JaringanJalan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalan_4, 
                style: style_JaringanJalan_4,
                popuplayertitle: 'Jaringan Jalan',
                interactive: true,
                title: '<img src="styles/legend/JaringanJalan_4.png" /> Jaringan Jalan'
            });
var format_LokasiWisata_5 = new ol.format.GeoJSON();
var features_LokasiWisata_5 = format_LokasiWisata_5.readFeatures(json_LokasiWisata_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LokasiWisata_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LokasiWisata_5.addFeatures(features_LokasiWisata_5);
var lyr_LokasiWisata_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LokasiWisata_5, 
                style: style_LokasiWisata_5,
                popuplayertitle: 'Lokasi Wisata',
                interactive: true,
                title: '<img src="styles/legend/LokasiWisata_5.png" /> Lokasi Wisata'
            });

lyr_OSMStandard_0.setVisible(false);lyr_GoogleTerrain_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(false);lyr_BatasKecamatan_3.setVisible(true);lyr_JaringanJalan_4.setVisible(true);lyr_LokasiWisata_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleTerrain_1,lyr_GoogleSatellite_2,lyr_BatasKecamatan_3,lyr_JaringanJalan_4,lyr_LokasiWisata_5];
lyr_BatasKecamatan_3.set('fieldAliases', {'fid': 'fid', 'Kecamatan': 'Kecamatan', 'Kabupaten': 'Kabupaten', 'Provinsi': 'Provinsi', });
lyr_JaringanJalan_4.set('fieldAliases', {'fid': 'fid', 'Status': 'Status', 'Fungsi': 'Fungsi', 'Panjang_Km': 'Panjang_Km', });
lyr_LokasiWisata_5.set('fieldAliases', {'fid': 'fid', 'Wisata': 'Wisata', 'Kab_Kota': 'Kabupaten', });
lyr_BatasKecamatan_3.set('fieldImages', {'fid': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kabupaten': 'TextEdit', 'Provinsi': 'TextEdit', });
lyr_JaringanJalan_4.set('fieldImages', {'fid': 'TextEdit', 'Status': 'TextEdit', 'Fungsi': 'TextEdit', 'Panjang_Km': 'TextEdit', });
lyr_LokasiWisata_5.set('fieldImages', {'fid': 'Hidden', 'Wisata': 'TextEdit', 'Kab_Kota': 'TextEdit', });
lyr_BatasKecamatan_3.set('fieldLabels', {'fid': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Kabupaten': 'inline label - always visible', 'Provinsi': 'inline label - always visible', });
lyr_JaringanJalan_4.set('fieldLabels', {'fid': 'inline label - always visible', 'Status': 'inline label - always visible', 'Fungsi': 'inline label - always visible', 'Panjang_Km': 'inline label - always visible', });
lyr_LokasiWisata_5.set('fieldLabels', {'Wisata': 'inline label - always visible', 'Kab_Kota': 'inline label - always visible', });
lyr_LokasiWisata_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});