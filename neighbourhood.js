const notGentrifiedNeighbourhoods = [transvaal];
const gentrifyingNeighbourhoods = [zeeheldenkwartier, moerwijk, binckhorst];
const richNeighbourhoods = [duindorp];

const neighbourhoodList = notGentrifiedNeighbourhoods.concat(gentrifyingNeighbourhoods, richNeighbourhoods);

let location1PopupContent = readTextFileAsString("location1PopupContent.html");

const location1 = {
    "type": "Feature",
    "properties": {
        "name": "A point to show",
        "popupContent": location1PopupContent
    },
    "geometry": {
        "type": "Point",
        "coordinates": [4.318742752075196, 52.08045547108372]
    }
};

const locationList = [location1];
