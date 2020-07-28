popupContent = readTextFileAsString("neighbourhoods/notGentrified/spoorwijkPopup.html");

const spoorwijk = {
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
                    [4.308400, 52.054877],
                    [4.309634, 52.054904],
                    [4.311694, 52.055834],
                    [4.312198, 52.057549],
                    [4.314172, 52.058295],
                    [4.314430, 52.057846],
                    [4.319848, 52.052061],
                    [4.310138, 52.048767],
                    [4.309301, 52.050588],
                    [4.308701, 52.052831]
                ]
            ]
        ]
    }
};