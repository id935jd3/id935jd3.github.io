popupContent = readTextFileAsString("neighbourhoods/gentrifying/schilderswijkPopup.html");

const schilderswijk = {
    "type": "Feature",
    "properties": {
        "popupContent": popupContent,
        "style": {
            weight: 2,
            color: "#999",
            opacity: 1,
            fill: 'url(images/yellow-green.png)',
            fillOpacity: neighbourhoodOpacity
        }
    },
    "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
            [
                [
                    [4.291856, 52.072635],
                    [4.301383, 52.062768],
                    [4.303722, 52.061963],
                    [4.306319, 52.061620],
                    [4.308207, 52.061647],
                    [4.310782, 52.062610],
                    [4.314473, 52.065947],
                    [4.317005, 52.067609],
                    [4.319150, 52.068757],
                    [4.317670, 52.070181],
                    [4.317487, 52.070181],
                    [4.314269, 52.072727],
                    [4.307992, 52.070656],
                    [4.306126, 52.072523],
                    [4.300783, 52.070821],
                    [4.298412, 52.073321],
                    [4.296995, 52.073822]
                ]
            ]
        ]
    }
};