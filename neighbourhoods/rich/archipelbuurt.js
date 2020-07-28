popupContent = readTextFileAsString("neighbourhoods/rich/archipelbuurtPopup.html");

const archipelbuurt = {
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
                    [4.294324, 52.089707],
                    [4.295247, 52.090936],
                    [4.295998, 52.092346],
                    [4.302156, 52.094957],
                    [4.301212, 52.095958],
                    [4.303422, 52.096855],
                    [4.304806, 52.096006],
                    [4.305911, 52.096302],
                    [4.306458, 52.096249],
                    [4.309816, 52.092439],
                    [4.313850, 52.087323],

                    [4.308872, 52.085673],
                    [4.304688, 52.090606],
                    [4.300783, 52.089485],
                    [4.302499, 52.087481],
                    [4.300718, 52.086980],
                    [4.298658, 52.087310],
                    [4.296641, 52.087771]
                ]
            ]
        ]
    }
};