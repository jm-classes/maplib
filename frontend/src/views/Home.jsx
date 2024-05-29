import { useFetch } from '@/hooks';

export default function Home() {

  const { data: stations, isLoading, error } = useFetch(`${import.meta.env.VITE_API_URL}/api/stations`);

  return (
    <div className="container">
      <h1>Liste des stations Vélib Parisiennes</h1>
      <hr />

      {isLoading && <p>Loading ...</p>}

      {!isLoading && !stations && error && (
        <p className='error'>{error.message}</p>
      )}

      {!isLoading && !error && stations && (
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
      )}
    </div>
  );
}
