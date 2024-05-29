import { useEffect, useState } from 'react';

export default function Home() {
  const [stations, setStations] = useState(null);

  useEffect(() => {
    fetch('http://localhost:9000/api/stations')
      .then((res) => res.json())
      .then((stationsData) => {
        setStations(stationsData);
      });
  }, []);

  return (
    <div className="container">
      <h1>Liste des stations Vélib Parisiennes</h1>
      <hr />

      <table className="stations-list">
        <thead>
          <tr>
            <th>#</th>
            <th>Capacité</th>
            <th>Nom</th>
          </tr>
        </thead>
        <tbody>
          {stations &&
            stations.map((station) => (
              <tr key={station._id}>
                <td>{station.stationcode}</td>
                <td>{station.capacity} places</td>
                <td>
                  📌{' '}
                  <a
                    target="_blank"
                    href={`https://www.google.com/maps/search/${station.coordonnees_geo.lat}+${station.coordonnees_geo.lon}`}
                    title="Voir l'emplacement sur Google Maps"
                  >
                    {station.name}
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
