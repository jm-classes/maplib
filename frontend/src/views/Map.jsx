import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-supercluster/src/styles.css'
import { SuperClustering } from 'react-leaflet-supercluster';

export default function Map() {
  const [stations, setStations] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/stations`)
      .then((res) => res.json())
      .then((stationsData) => {
        setStations(stationsData);
      });
  }, []);

  return (
    <div className="container">
      <h1>Map</h1>
      <hr />
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {stations && (
          <SuperClustering>
            {stations.map((station) => (
              <Marker key={station._id} position={[station.coordonnees_geo.lat, station.coordonnees_geo.lon]}>
                <Popup>
                  {station.name}
                  <br />
                  Capacité : {station.capacity}
                </Popup>
              </Marker>
            ))}
          </SuperClustering>
        )}
      </MapContainer>
    </div>
  );
}
