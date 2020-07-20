popupContent = readTextFileAsString("neighbourhoods/gentrifying/binckhorstPopup.html");

const binckhorst = {
    "type": "Feature",
    "properties": {
        "popupContent": popupContent,
        "style": {
            weight: 2,
            color: "#999",
            opacity: 1,
            fillColor: gentrifyingColor,
            fillOpacity: 0.7
        }
    },
    "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
            [
                [
                    [4.326897, 52.071461],
                    [4.331446, 52.074151],
                    [4.331338, 52.075826],
                    [4.332111, 52.075919],
                    [4.354641, 52.068150],
                    [4.342175, 52.061290],
                    [4.332347, 52.069139],
                    [4.326854, 52.071474],
                ]
            ]
        ]
    }
};