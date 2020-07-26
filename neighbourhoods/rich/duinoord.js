popupContent = readTextFileAsString("neighbourhoods/rich/duinoordPopup.html");

const duinoord = {
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
                    [4.293358, 52.084530],
                    [4.287908, 52.081721],
                    [4.283509, 52.080719],
                    [4.277179, 52.078701],
                    [4.276299, 52.080323],
                    [4.276922, 52.081972],
                    [4.277179, 52.082314],
                    [4.275634, 52.083092],
                    [4.273703, 52.085149],
                    [4.280183, 52.087734],
                    [4.282393, 52.085400],
                    [4.285934, 52.085769],
                    [4.288831, 52.085624],
                    [4.292736, 52.085308],
                ]
            ]
        ]
    }
};