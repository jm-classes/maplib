import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useFetch } from '@/hooks';

export default function Map() {
  const { data: stations, isLoading, error } = useFetch(`${import.meta.env.VITE_API_URL}/api/stations`);

  return (
    <div className="container">
      <h1>Map</h1>
      <hr />
      <MapContainer center={[48.8588255, 2.2646351]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {!isLoading &&
          !error &&
          stations &&
          stations.map((station) => (
            <Marker key={station._id} position={[station.coordonnees_geo.lat, station.coordonnees_geo.lon]}>
              <Popup>
                {station.name}
                <br />
                Capacité: {station.capacity}
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
}
