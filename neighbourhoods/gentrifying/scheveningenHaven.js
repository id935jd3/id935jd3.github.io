popupContent = readTextFileAsString("neighbourhoods/gentrifying/scheveningenHavenPopup.html");

const scheveningenHaven = {
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
                    [4.252739, 52.103733],
                    [4.253855, 52.101466],
                    [4.256129, 52.099913],
                    [4.257540, 52.097166],
                    [4.264798, 52.091484],
                    [4.265249, 52.091932],
                    [4.267845, 52.093521],
                    [4.268349, 52.094562],
                    [4.270935, 52.096182],
                    [4.274497, 52.098885],
                    [4.275398, 52.100097],
                    [4.274926, 52.101257],
                    [4.272512, 52.101845],
                    [4.271708, 52.103071],
                    [4.270731, 52.104573],
                    [4.270753, 52.105680],
                    [4.270141, 52.106346],
                    [4.262245, 52.101271],
                    [4.259949, 52.101798],
                    [4.258769, 52.102720],
                    [4.258060, 52.103696],
                    [4.256065, 52.104157]
                ]
            ]
        ]
    }
};