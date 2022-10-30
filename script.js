// Create map
let map = L.map("map").setView([43.1896, -4.83275], 9);

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

// Add rectangle
let rectangle = L.rectangle(
  [
    [43.9, -4],
    [42.9, -6]
  ]
).addTo(map);

// Add markers
// Mountain Naranjo de Bulnes (Picu Urriellu) in national park Picos de Europa, Spain
let point = L.marker([43.2002345,-4.8516131]).addTo(map);
point.bindPopup("<a href='https://en.wikipedia.org/wiki/Naranjo_de_Bulnes'>Naranjo de Bulnes/Pico Urriello</a>, the second highest mountain in Picos de Europa national park");


// Marker for Llastres
let circleMarker = L.circleMarker(
  [43.5138741,-5.2741467], 
  {radius: 50, color: "black", fillColor: "red"}
).addTo(map);
circleMarker.bindPopup("<a href='https://en.wikipedia.org/wiki/Lastres'>Llastres</a>, a beautiful seaside town in Asturias province, Spain");


// L.circle(
//   [43.5138741,-5.2741467], 
//   {radius: 500, color: "black", fillColor: "blue"}
// ).addTo(map);

let line = L.polyline(
  [[43.5138741,-5.2741467], [43.2002345,-4.8516131]],
  {color: 'red'}
).addTo(map);
