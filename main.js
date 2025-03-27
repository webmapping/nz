/*
Skript für die Neuseelandreise
*/

let stop = {
    nr: 7,
    title: "Tongariro Nationalpark",
    user: "webmapping",
    lat: -39.2,
    lng: 175.583333,
    zoom: 11,
};

// Karte initialisieren
let map = L.map('map').setView([stop.lat, stop.lng], stop.zoom);

// Hintergrundkarte definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Marker zeichnen
let marker = L.marker([stop.lat, stop.lng]).addTo(map);

// Popup definieren und öffnen
marker.bindPopup(`
    <h2>${stop.title}</h2>
    <ul>
        <li>Geogr. Breite: ${stop.lat.toFixed(5)}°</li>
        <li>Geogr. Länge: ${stop.lng.toFixed(5)}°</li>
    </ul>
`).openPopup();
