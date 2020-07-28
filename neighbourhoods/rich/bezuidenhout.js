popupContent = readTextFileAsString("neighbourhoods/rich/bezuidenhoutPopup.html");

const bezuidenhout = {
    "type": "Feature",
    "properties": {
        "popupContent": popupContent,
        "style": {
            weight: 2,
            color: "#999",
            opacity: 1,
            fillColor: richColor,
            fillOpacity: neighbourhoodOpacity
        }
    },
    "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
            [
                [
                    [4.318206, 52.083209],
                    [4.320309, 52.081350],
                    [4.321747, 52.081825],
                    [4.324923, 52.079438],
                    [4.330437, 52.081192],
                    [4.335458, 52.077763],
                    [4.331961, 52.076154],
                    [4.334471, 52.075257],
                    [4.352517, 52.083009],
                    [4.342861, 52.091078],
                    [4.338355, 52.089628],
                    [4.335008, 52.088099],
                    [4.334686, 52.088088],
                    [4.327712, 52.085068],
                    [4.325931, 52.083644],
                    [4.321768, 52.081996]
                ]
            ]
        ]
    }
};