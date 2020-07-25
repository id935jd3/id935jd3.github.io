const notGentrifiedNeighbourhoods = [transvaal];
const gentrifyingNeighbourhoods = [zeeheldenkwartier, moerwijk, binckhorst, duindorp, schilderswijk];
const richNeighbourhoods = [duinoord];

const neighbourhoodList = notGentrifiedNeighbourhoods.concat(gentrifyingNeighbourhoods, richNeighbourhoods);

var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    let div = L.DomUtil.create('div', 'info legend'),
        grades_en = ["Not (yet) gentrified", "Gentrify(ing/ed)", "Rich"],
        grades_nl = ["Niet gentrified", "Gentrify(ing/ed)", "Rich"],
        grades = {"en": grades_en, "nl": grades_nl},
        languages = ["en", "nl"],
        labels = [notGentrifiedColor, gentrifyingColor, richColor];


    // Generate a list of colored squares with the names
    let language, legendHtml = "";
    for (language of languages) {
        legendHtml += '<div lang=' + language + '>';
        for (let i = 0; i < grades[language].length; i++) {
            legendHtml +=
                '<i style="background:' + labels[i] + '"></i>' + grades[language][i];
            if (i + 1 < grades[language].length) {
                legendHtml += '<br> <br>';
            }
        }
        legendHtml += '</div>';
    }

    // The innerHTML parses the code directly, so we need to assign it once we have fully assembled it
    // otherwise, it will ignore the half assembled parts
    div.innerHTML += legendHtml;

    return div;
};

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

const locationList = [];
