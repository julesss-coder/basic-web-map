// Create map
let map = L.map("map").setView([40.41930525492772, -3.6871473268595016], 7);

// Add tiles
// Add tile layer with topography
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(map);

// Add tile layer with railway map
L.tileLayer('https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Map style: &copy; <a href="https://www.OpenRailwayMap.org">OpenRailwayMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(map);


// Markers
// Marker for Barcelona
let circleMarker = L.circleMarker(
  [41.413184, 2.173827], 
  {radius: 50, color: "black", fillColor: "red"}
).addTo(map);
circleMarker.bindPopup(`<p><a href='https://unsplash.com/photos/d0xjEv-WJQk' target='_blank'>Barcelona - starting point of trip</a>
| Photo by <a href="https://unsplash.com/@bielmorro?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Biel Morro</a> on <a href="https://unsplash.com/s/photos/barcelona?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
`);

// Marker for Urkiola nature park
let point4 = L.marker([43.09593244112086, -2.642702558285849]).addTo(map);
point4.bindPopup("<a href='https://en.wikipedia.org/wiki/Urkiola_Natural_Park#/media/File:Sierra_de_Anboto_1.JPG' target='_blank'>Urkiola nature park</a>");

// Marker for Mount Naranjo de Bulnes (Picu Urriellu) in national park Picos de Europa, Spain
let point = L.marker([43.2002345,-4.8516131]).addTo(map);

point.bindPopup("<a href='https://en.wikipedia.org/wiki/Naranjo_de_Bulnes' target='_blank'>Naranjo de Bulnes/Pico Urriello</a>, the second highest mountain in Picos de Europa national park");

// Marker for Llastres
let pointLlastres = L.marker([43.5138741, -5.2741467]).addTo(map);

pointLlastres.bindPopup("<a href='https://en.wikipedia.org/wiki/Lastres' target='_blank'>Llastres</a>, a beautiful seaside town in Asturias province, Spain");

// Marker for Alentejo
let point1 = L.marker([37.654581, -8.714313]).addTo(map);

point1.bindPopup(`<p><a href='https://unsplash.com/photos/WYHVKg9-vDc' target='_blank'>Alentejo</a>
(Photo by <a href="https://unsplash.com/@3g3m39how2?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target='_blank'>Álvaro Montanha</a> on <a href="https://unsplash.com/s/photos/alentejo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target='_blank'>Unsplash</a>)</p>
`);

// Marker for Granada
let point3 = L.marker([37.177795369065954, -3.5998552609053154]).addTo(map);
point3.bindPopup("<a href='https://en.wikipedia.org/wiki/Granada' target='_blank'>Granada</a>");


// Line
let latLngs = [
  // Barcelona
  [41.413184, 2.173827],
  // Urkiola nature park
  [43.09593244112086, -2.642702558285849],
  // Naranjo de Bulnes
  [43.2002345,-4.8516131],
  // Llastres
  [43.5138741,-5.2741467], 
  // Alentejo Litoral
  [37.654581, -8.714313],
  // Granada
  [37.177795, -3.599855]
];

let line = L.polyline(
  latLngs,
  {color: 'red'}
).addTo(map);

// Legend
let legend = L.control({ position: "bottomleft" });

legend.onAdd = function() {
  let div = L.DomUtil.create('div', 'legend');
  div.innerHTML = `
    <h2>Places I'd like to visit</h2>
    <p>Practice project to explore web mapping.</p>
    <p>Click the markers or any point on the map to learn more.</p>
    <p>Created with the Leaflet library</p>
    <hr>
    <p>Find me on <a href="https://github.com/julesss-coder" target='_blank'>GitHub</a>
  `;
  return div;
}

legend.addTo(map);

// Popups showing latitude and longitude of clicked location
let popup = L.popup();
map.addEventListener('click', function(event) { 
  popup
      .setLatLng(event.latlng)
      .setContent(`<p><b>Latitude:</b> ${event.latlng.lat.toFixed(6)}</br>
      <b>Longitude:</b> ${event.latlng.lng.toFixed(6)}</p>`)
      .openOn(map);
});

