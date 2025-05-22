// Coordinates
const indonesiaCoor = [-2.548926, 118.0148634];
const jakartaCoor = [-6.2088, 106.8456];
 
// Initialize map
const myMap = L.map('map', {
  zoom: 5,
  center: indonesiaCoor,
});

// Set base map
const rasterTileUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const baseTile = L.tileLayer(rasterTileUrl, {
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
});
baseTile.addTo(myMap);

// Marker
const jakartaMarker = L.marker(jakartaCoor, {
  icon: L.icon({
    iconUrl: 'images/leaf-green.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],

    shadowUrl: 'images/leaf-shadow.png',
    shadowSize: [50, 64],
    shadowAnchor: [4, 62],

    popupAnchor: [-2, -76],
  }),
});

jakartaMarker.bindPopup('<b>Jakarta</b><br>Ibu kota Indonesia.');
jakartaMarker.openPopup();
jakartaMarker.addTo(myMap);

// Dealing with events
const myNewPopup = L.popup();
 
myMap.on('click', (event) => {
  myNewPopup.setLatLng(event.latlng);
  myNewPopup.setContent(`You clicked the map at ${event.latlng.toString()}`);
  myNewPopup.openOn(myMap);
});