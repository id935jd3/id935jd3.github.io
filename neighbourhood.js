const neighbourhood1 = {
    "type": "Feature",
    "properties": {
        "popupContent": "This is a gentrified neighbourhood",
        "style": {
            weight: 2,
            color: "#999",
            opacity: 1,
            fillColor: "#B0DE5C",
            fillOpacity: 0.8
        }
    },
    "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
            [
                [
                    [4.315845966339112, 52.08624414714523],
                    [4.312820434570313, 52.089975401365436],
                    [4.327261447906495, 52.09510371866937],
                    [4.330050945281983, 52.09237484171005]
                ]
            ]
        ]
    }
};

const neighbourhoodList = [neighbourhood1];

const location1 = {
    "type": "Feature",
    "properties": {
        "name": "A point to show",
        "popupContent": "This is an important point"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [4.318742752075196, 52.08045547108372]
    }
};

const locationList = [location1];
