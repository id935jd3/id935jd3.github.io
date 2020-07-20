popupContent = readTextFileAsString("neighbourhoods/gentrifying/moerwijkPopup.html");

const moerwijk = {
    "type": "Feature",
    "properties": {
        "popupContent": popupContent,
        "style": {
            weight: 2,
            color: "#999",
            opacity: 1,
            fillColor: gentrifyingColor,
            fillOpacity: 0.7
        }
    },
    "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
            [
                [
                    [4.293551, 52.058717],
                    [4.308143, 52.055155],
                    [4.308336, 52.052754],
                    [4.308829, 52.050590],
                    [4.309816, 52.048610],
                    [4.304559, 52.046710],
                    [4.303658, 52.047225],
                    [4.298036, 52.045615],
                    [4.298594, 52.044955],
                    [4.297071, 52.044533],
                    [4.296105, 52.043569],
                    [4.295461, 52.043728],
                    [4.293294, 52.043173],
                    [4.290719, 52.041985],
                    [4.290719, 52.041985],
                    [4.289153, 52.044506],
                    [4.289603, 52.044797],
                    [4.284024, 52.048637],
                    [4.296491, 52.054667]
                ]
            ]
        ]
    }
};