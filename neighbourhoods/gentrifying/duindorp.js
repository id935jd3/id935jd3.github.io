popupContent = readTextFileAsString("neighbourhoods/gentrifying/duindorpPopup.html");

const duindorp = {
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
                    [4.251468, 52.087902],
                    [4.251881, 52.087681],
                    [4.252492, 52.087576],
                    [4.256172, 52.085908],
                    [4.258597, 52.084187],
                    [4.259294, 52.083508],
                    [4.260324, 52.083838],
                    [4.261140, 52.084418],
                    [4.261891, 52.084681],
                    [4.262878, 52.085262],
                    [4.264873, 52.085967],
                    [4.265388, 52.085960],
                    [4.268242, 52.087121],
                    [4.269873, 52.087582],
                    [4.265378, 52.090878],
                    [4.265034, 52.091294],
                    [4.264401, 52.091617],
                    [4.259938, 52.095143],
                    [4.258683, 52.094550],
                    [4.259713, 52.093713],
                    [4.252535, 52.088274],
                    [4.252052, 52.088466],
                    [4.251559, 52.088255]
                ]
            ]
        ]
    }
};