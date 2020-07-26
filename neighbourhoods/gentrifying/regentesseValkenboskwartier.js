popupContent = readTextFileAsString("neighbourhoods/gentrifying/regentesseValkenboskwartierPopup.html");

const regentesseValkenboskwartier = {
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
                    [4.296598, 52.073936],
                    [4.291663, 52.072723],
                    [4.284368, 52.070744],
                    [4.275699, 52.068502],
                    [4.268575, 52.075624],
                    [4.277287, 52.078668],
                    [4.282951, 52.080461],
                    [4.286020, 52.081226],
                    [4.287779, 52.081569],
                    [4.294131, 52.076775],
                    [4.294356, 52.076386],
                    [4.294474, 52.076122]
                ]
            ]
        ]
    }
};