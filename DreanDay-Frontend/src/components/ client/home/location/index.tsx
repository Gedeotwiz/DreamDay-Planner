/** @format */

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from 'react-simple-maps';

import ExplanationLocation from './Explain';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

import type { Feature, Geometry } from 'geojson';

const provinces = [
  { name: 'Kigali City', coordinates: [30.0619, -1.9441] },
  { name: 'Northern Province', coordinates: [29.8759, -1.6047] },
  { name: 'Southern Province', coordinates: [29.7516, -2.6] },
  { name: 'Eastern Province', coordinates: [30.4356, -1.5] },
  { name: 'Western Province', coordinates: [29.3275, -2.05] },
];

const RwandaMapUI = () => {
  return (
    <div className='w-full px-10 py-16 gap-10 md:px-24 h-auto md:h-screen flex flex-col md:flex-row items-center justify-between bg-gray-50'>
      <ExplanationLocation />
      <div className='w-full max-w-4xl h-[300px] md:h-[680px] bg-secondary rounded-xl shadow-md p-2'>
        <ComposableMap
          projection='geoMercator'
          projectionConfig={{ center: [30.0, -1.9], scale: 3000 }}
        >
          <ZoomableGroup
            center={[30.0, -1.9]}
            zoom={5}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }: { geographies: Feature<Geometry>[] }) =>
                geographies.map((geo: Feature<Geometry>) => {
                  const isRwanda = geo.properties?.name === 'Rwanda';

                  return (
                    <Geography
                      key={geo.id || JSON.stringify(geo)}
                      geography={geo}
                      onClick={() => console.log(geo.properties?.name)}
                      style={{
                        default: {
                          fill: isRwanda ? '#3b82f6' : '#e5e7eb',
                          outline: 'none',
                        },
                        hover: {
                          fill: '#2563eb',
                          outline: 'none',
                        },
                        pressed: {
                          fill: '#1d4ed8',
                          outline: 'none',
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>

            {provinces.map((prov, index) => (
              <Marker
                key={index}
                coordinates={prov.coordinates}
              >
                <circle
                  r={1}
                  fill='#ef4444'
                  stroke='#fff'
                  strokeWidth={0.4}
                />
                <text
                  textAnchor='middle'
                  x={10}
                  style={{ fontSize: '2px', fill: '#111' }}
                >
                  {prov.name}
                </text>
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </div>
  );
};

export default RwandaMapUI;
