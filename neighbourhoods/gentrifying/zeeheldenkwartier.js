let popupContent = readTextFileAsString("neighbourhoods/gentrifying/zeeheldenkwartierPopup.html");

const zeeheldenkwartier = {
    "type": "Feature",
    "properties": {
        "popupContent": popupContent,
        "style": {
            weight: 2,
            color: "#999",
            opacity: 1,
            fillColor: gentrifyingColor,
            fillOpacity: neighbourhoodOpacity
        }
    },
    "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
            [
                [
                    [4.294775, 52.076736],
                    [4.288015, 52.081589],
                    [4.293466, 52.084543],
                    [4.293187, 52.085037],
                    [4.293562, 52.085222],
                    [4.298519, 52.086527],
                    [4.298830, 52.087121],
                    [4.300665, 52.086831],
                    [4.303905, 52.083996],
                    [4.301115, 52.082895],
                    [4.303358, 52.080211],
                    [4.294817, 52.076624]
                ]
            ]
        ]
    }
};