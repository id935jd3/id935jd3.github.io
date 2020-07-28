let location1PopupContent = readTextFileAsString("anti_squat/location1PopupContent.html");

const location1 = {
    "type": "Feature",
    "properties": {
        "name": "A point to show",
        "popupContent": location1PopupContent
    },
    "geometry": {
        "type": "Point",
        "coordinates": [4.294624, 52.080288]
    }
};

const antiSquats = [];