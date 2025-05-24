import { dicoding, landmark, streets, trainStops, zoo } from './geojson.js';

// Initialize map
const indonesiaCoor = [-2.548926, 118.0148634];
const myMap = L.map('map', {
  zoom: 5,
  center: indonesiaCoor,
  scrollWheelZoom: false,
});

// Set base map
const osmTileUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const baseTile = L.tileLayer(osmTileUrl, {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
});
baseTile.addTo(myMap);

function onEachFeature(feature, layer) {
  let popupContent = `
    <p>Tipe geometri: ${feature.geometry ? feature.geometry.type : feature.type}</p>
  `;
  if (feature.properties && feature.properties.popupContent) {
    popupContent += feature.properties.popupContent;
  }
  layer.bindPopup(popupContent);
}

const dicodingLayer = L.geoJSON(dicoding, {
  onEachFeature,
});
dicodingLayer.addTo(myMap);

const landmarkLayer = L.geoJSON(landmark, {
  onEachFeature,
});
landmarkLayer.addTo(myMap);

const trainStopsLayer = L.geoJSON(trainStops, {
  onEachFeature,
});
trainStopsLayer.addTo(myMap);

const streetsLayer = L.geoJSON(streets, {
  onEachFeature,

  style: {
    color: '#FF4500',
    weight: 4,
    opacity: 1,
  },

  filter(feature) {
    if (feature.properties) {
      // If the property "underConstruction" exists and is true, return false (don't render features under construction)
      return !feature.properties.underConstruction;
    }
    return false;
  },
});
streetsLayer.addTo(myMap);

const zooLayer = L.geoJSON([zoo], {
  onEachFeature,
  
  style(feature) {
    if (feature.properties) {
      return feature.properties.style;
    }
    return null;
  },
});
zooLayer.addTo(myMap);

const featuresGroup = L.featureGroup([
  dicodingLayer,
  landmarkLayer,
  trainStopsLayer,
  streetsLayer,
  zooLayer,
]);
myMap.fitBounds(featuresGroup.getBounds());