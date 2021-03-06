let map = L.map('mapid').setView([52.077396, 4.31247], 14);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaWQ5MzVqZDMiLCJhIjoiY2tjZGp1M3VxMDBkbTJxc3dmbTY1ZWhlcCJ9.w3laGzgZR7en_xEpKkc-Og'
}).addTo(map);

var popup = L.popup();

/*function onMapClick(e) {
    // Round longitude and latitude to 6 decimals
    let lng = e.latlng.lng.toFixed(6);
    let lat = e.latlng.lat.toFixed(6);

    popup
        .setLatLng(e.latlng)
        .setContent("[" + lng + ", " + lat + "],")
        .openOn(map);
}

map.on('click', onMapClick);*/

function onEachFeature(feature, layer) {
    var popupContent = "";

    if (feature.properties && feature.properties.popupContent) {
        popupContent += feature.properties.popupContent;
    }

    var thepopup = layer.bindPopup(popupContent);
    thepopup.on('click', function (e) {
        const languageButton = document.getElementById('languageButton');
        const selectedLanguage = languageButton.options[languageButton.selectedIndex].value;
        localize(selectedLanguage);
        animateCollapsible();
    });
}

L.geoJson(neighbourhoodList, {
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature
}).addTo(map);

// Reduce marker size to approximate 2/3 of the original size
L.Icon.Default.prototype.options.iconSize = [17, 28];
L.Icon.Default.prototype.options.shadowSize = [0, 0];
L.Icon.Default.prototype.options.popupAnchor = [-3, -34];

L.geoJson(antiSquats, {
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature
}).addTo(map);

legend.addTo(map);