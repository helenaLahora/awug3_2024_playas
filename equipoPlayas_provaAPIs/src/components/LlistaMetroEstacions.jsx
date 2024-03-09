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
          <div className="listContainer">
            <h2>Estacions de Metro</h2>
            <ul className="cardContainer">
              {data.map(metroEstacio => (
                metroEstacio.properties ? (
                  <MetroEstacio key={metroEstacio.id} metroEstacio={metroEstacio.properties} /> // Renderitzar la llista d'estacions de metro
                ) : null
              ))}
            </ul>
          </div>
        );
      }}
    </FetcherMetroEstacions>
  );
}

export default MetroEstacioList;