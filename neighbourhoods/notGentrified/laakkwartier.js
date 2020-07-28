popupContent = readTextFileAsString("neighbourhoods/notGentrified/laakkwartierPopup.html");

const laakkwartier = {
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
                    [4.319859, 52.052106],
                    [4.314494, 52.057872],
                    [4.314194, 52.058373],
                    [4.312134, 52.057581],
                    [4.311662, 52.055879],
                    [4.309623, 52.054969],
                    [4.308486, 52.055022],
                    [4.309216, 52.058424],
                    [4.311104, 52.062581],
                    [4.314559, 52.065945],
                    [4.319258, 52.068623],
                    [4.326253, 52.071459],
                    [4.331038, 52.069203],
                    [4.340072, 52.061827],
                    [4.328485, 52.056603],
                    [4.325480, 52.055415],
                    [4.324021, 52.055734],
                    [4.320760, 52.054731],
                    [4.321833, 52.053702],
                    [4.321468, 52.052897]
                ]
            ]
        ]
    }
};