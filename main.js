/*
Skript für die Neuseelandreise
*/

// Karte initialisieren
var map = L.map('map').setView([-39.2, 175.583333], 11);

// Hintergrundkarte definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Marker zeichnen
var marker = L.marker([-39.2, 175.583333]).addTo(map);

// Popup definieren und öffnen
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
