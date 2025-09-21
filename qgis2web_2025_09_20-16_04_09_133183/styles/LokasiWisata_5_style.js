var size = 0;
var placement = 'point';

var style_LokasiWisata_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Wisata") !== null) {
        labelText = String(feature.get("Wisata"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [700, 700],
                  scale: 0.02142857142857143,
                  anchor: [350.0, 350.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: -0.0523599,
                  src: "styles/blue-marker.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
