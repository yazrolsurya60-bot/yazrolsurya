var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Kel_Desa_2 = new ol.format.GeoJSON();
var features_Kel_Desa_2 = format_Kel_Desa_2.readFeatures(json_Kel_Desa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kel_Desa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kel_Desa_2.addFeatures(features_Kel_Desa_2);
var lyr_Kel_Desa_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kel_Desa_2, 
                style: style_Kel_Desa_2,
                popuplayertitle: 'Kel_Desa',
                interactive: true,
                title: '<img src="styles/legend/Kel_Desa_2.png" /> Kel_Desa'
            });
var format_Book2_bersih_3 = new ol.format.GeoJSON();
var features_Book2_bersih_3 = format_Book2_bersih_3.readFeatures(json_Book2_bersih_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Book2_bersih_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Book2_bersih_3.addFeatures(features_Book2_bersih_3);
cluster_Book2_bersih_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Book2_bersih_3
});
var lyr_Book2_bersih_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Book2_bersih_3, 
                style: style_Book2_bersih_3,
                popuplayertitle: 'Book2_bersih',
                interactive: true,
                title: '<img src="styles/legend/Book2_bersih_3.png" /> Book2_bersih'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Kel_Desa_2.setVisible(true);lyr_Book2_bersih_3.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_GoogleSatellite_1,lyr_Kel_Desa_2,lyr_Book2_bersih_3];
lyr_Kel_Desa_2.set('fieldAliases', {'FID': 'FID', 'NAME': 'NAME', 'KODE_KEC': 'KODE_KEC', 'KODE_KD': 'KODE_KD', 'KODE_KK': 'KODE_KK', 'KODE_PROV': 'KODE_PROV', 'TIPE_KD': 'TIPE_KD', 'KECAMATAN': 'KECAMATAN', 'KEL_DESA': 'KEL_DESA', 'KAB_KOTA': 'KAB_KOTA', 'PROVINSI': 'PROVINSI', 'JENIS_KD': 'JENIS_KD', 'keterangan': 'keterangan', 'Stuntingdt': 'Stuntingdt', });
lyr_Book2_bersih_3.set('fieldAliases', {'nama': 'nama', 'x': 'x', 'y': 'y', 'kabupaten': 'kabupaten', });
lyr_Kel_Desa_2.set('fieldImages', {'FID': 'Hidden', 'NAME': 'Hidden', 'KODE_KEC': 'Hidden', 'KODE_KD': 'Hidden', 'KODE_KK': 'Hidden', 'KODE_PROV': 'Hidden', 'TIPE_KD': 'Hidden', 'KECAMATAN': 'TextEdit', 'KEL_DESA': 'Hidden', 'KAB_KOTA': 'Hidden', 'PROVINSI': 'TextEdit', 'JENIS_KD': 'Hidden', 'keterangan': 'Hidden', 'Stuntingdt': 'Hidden', });
lyr_Book2_bersih_3.set('fieldImages', {'nama': 'TextEdit', 'x': 'Hidden', 'y': 'Hidden', 'kabupaten': 'TextEdit', });
lyr_Kel_Desa_2.set('fieldLabels', {'KECAMATAN': 'inline label - always visible', 'PROVINSI': 'inline label - visible with data', });
lyr_Book2_bersih_3.set('fieldLabels', {'nama': 'inline label - always visible', 'kabupaten': 'inline label - always visible', });
lyr_Book2_bersih_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});