function readTextFileAsString(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status === 200) {
        result = xmlhttp.responseText;
    }
    return result;
}

function animateCollapsible() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
}

function localize(language) {
    const supportedLanguages = ["en", "nl"];
    let supportedLanguage;
    for (supportedLanguage of supportedLanguages) {
        if ([supportedLanguage].includes(language)) {
            let lang = ':lang(' + language + ')';
            let hide = '[lang]:not(' + lang + ')';
            document.querySelectorAll(hide).forEach(function (node) {
                node.style.display = 'none';
            });
            let show = '[lang]' + lang;
            document.querySelectorAll(show).forEach(function (node) {
                node.style.display = 'unset';
            });
        }
    }
}

function openFullscreen(elemId) {
    const elem = document.getElementById(elemId);

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}

const gentrifyingColor = "#ffb500";
const richColor = "#FF6666";
const notGentrifiedColor = "#41cb01";
const neighbourhoodOpacity = 0.6;