export const dicoding = {
  type: 'Point',
  coordinates: [107.6338, -6.8957],
};

export const landmark = {
  type: 'Feature',
  properties: {
    popupContent: 'Gedung Sate',
  },
  geometry: {
    type: 'Point',
    coordinates: [107.6191, -6.9025],
  },
};

export const trainStops = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        popupContent: 'Bandung Station',
      },
      geometry: {
        type: 'Point',
        coordinates: [107.6008, -6.9139],
      },
    },
    {
      type: 'Feature',
      properties: {
        popupContent: 'Kiaracondong Station',
      },
      geometry: {
        type: 'Point',
        coordinates: [107.6462, -6.9247],
      },
    },
  ],
};

export const streets = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: [
          [107.6042, -6.9208],
          [107.6169, -6.9223],
        ],
      },
      properties: {
        popupContent: 'Jalan Asia-Afrika',
        underConstruction: true,
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: [
          [107.609, -6.9138],
          [107.609, -6.916],
          [107.609, -6.9162],
          [107.6099, -6.9197],
          [107.6098, -6.9214],
        ],
      },
      properties: {
        popupContent: 'Jalan Braga',
        underConstruction: false,
      },
    },
  ],
};

export const zoo = {
  type: 'Feature',
  properties: {
    popupContent: 'Kebun Binatang Bandung',
    style: {
      fillColor: '#32CD32',
      fillOpacity: 0.7,
      opacity: 1,
      weight: 2,
      color: '#228B22',
    },
  },
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [107.60835886001587, -6.893638036739452],
        [107.60790020227435, -6.893691293105562],
        [107.60774195194246, -6.893472941966451],
        [107.60744690895082, -6.893142752247922],
        [107.60718941688539, -6.893062867604046],
        [107.60678708553314, -6.892221415203991],
        [107.60613799095155, -6.891646244349508],
        [107.60573029518129, -6.890847394782807],
        [107.60581612586977, -6.890650345016055],
        [107.6053547859192, -6.88926566866979],
        [107.60538697242738, -6.888461489397292],
        [107.6057142019272, -6.888354975484094],
        [107.60674953460695, -6.888807659449955],
        [107.60732352733613, -6.88868516853713],
        [107.60802626609802, -6.889121875125144],
        [107.60803699493408, -6.892626164646164],
      ],
    ],
  },
};
