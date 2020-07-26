popupContent = readTextFileAsString("neighbourhoods/notGentrified/transvaalPopup.html");

const transvaal = {
    "type": "Feature",
    "properties": {
        "popupContent": popupContent,
        "style": {
            weight: 2,
            color: "#999",
            opacity: 1,
            fillColor: notGentrifiedColor,
            fillOpacity: neighbourhoodOpacity
        }
    },
    "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
            [
                [
                    [4.292361, 52.059661],
                    [4.292361, 52.059661],
                    [4.294893, 52.059120],
                    [4.295107, 52.059272],
                    [4.296523, 52.059641],
                    [4.297307, 52.059919],
                    [4.298691, 52.060473],
                    [4.302735, 52.062082],
                    [4.301287, 52.062689],
                    [4.291663, 52.072635],
                    [4.284389, 52.070630]
                ]
            ]
        ]
    }
};