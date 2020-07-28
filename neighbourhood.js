const notGentrifiedNeighbourhoods = [transvaal, laakkwartier, spoorwijk];
const gentrifyingNeighbourhoods = [zeeheldenkwartier, moerwijk, binckhorst, duindorp, schilderswijk,
    regentesseValkenboskwartier, scheveningenHaven];
const richNeighbourhoods = [duinoord, archipelbuurt, vogelwijk, bezuidenhout];

const neighbourhoodList = notGentrifiedNeighbourhoods.concat(gentrifyingNeighbourhoods, richNeighbourhoods);

var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    let div = L.DomUtil.create('div', 'info legend'),
        grades_en = ["Not (yet) gentrified", "Gentrify(ing/ed)", "Historically rich"],
        grades_nl = ["(Nog) niet gegentrificeerd", "Gentrificerend/Gegentrificeerd", "Historisch rijke buurt"],
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
