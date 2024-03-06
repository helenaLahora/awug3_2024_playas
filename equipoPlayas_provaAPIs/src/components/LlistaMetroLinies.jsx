import React from 'react';
import FetcherMetroLinies from './FetcherMetroLinies';
import MetroLinia from './BusLinia';
import './List.css';
import Loader from './Loader';

function MetroLiniaList() {
  return (
    <FetcherMetroLinies>
      {({ data, loading, error }) => {
        if (loading) {
          return <Loader />; // Mostrar l'indicador de càrrega mentre es carreguen les dades
        }

        if (error) {
          return <div className="error">{error.message}</div>; // Mostrar missatge d'error en cas d'error
        }

        return (
          <ul className="MetroLinia-list">
            {data.properties.map(metroLinia => (
              <MetroLinia key={metroLinia.id} metroLinia={metroLinia} /> // Renderitzar la llista de linies de metro
            ))}
          </ul>
        );
      }}
    </FetcherMetroLinies>
  );
}

export default MetroLiniaList;