import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'

export default function Map() {
  return (
    <div className="container">
      <h1>Map</h1>
      <hr />
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}
