import React from 'react';
import FetcherMetroEstacions from './FetcherMetroEstacions';
import MetroEstacio from './MetroEstacio';
import './List.css';
import Loader from './Loader';

function MetroEstacioList() {
  return (
    <FetcherMetroEstacions>
      {({ data, loading, error }) => {
        if (loading) {
          return <Loader />; // Mostrar l'indicador de càrrega mentre es carreguen les dades
        }

        if (error) {
          return <div className="error">{error.message}</div>; // Mostrar missatge d'error en cas d'error
        }

        return (
          <ul className="MetroEstacio-list">
            {data.properties.map(metroEstacio => (
              <MetroEstacio key={metroEstacio.id} metroEstacio={metroEstacio} /> // Renderitzar la llista d'estacions de metro
            ))}
          </ul>
        );
      }}
    </FetcherMetroEstacions>
  );
}

export default MetroEstacioList;