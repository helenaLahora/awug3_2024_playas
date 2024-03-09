import React from 'react';
import FetcherMetroLinies from './FetcherMetroLinies';
import MetroLinia from './MetroLinia';
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
          <div className="listContainer">
            <h2>Linies de Metro</h2>
            <ul className="cardContainer">
              {data.map(metroLinia => (
                metroLinia.properties ? (
                  <MetroLinia key={metroLinia.id} metroLinia={metroLinia.properties} /> // Renderitzar la llista de linies de metro
                ) : null                
              ))}
            </ul>
          </div>
        );
      }}
    </FetcherMetroLinies>
  );
}

export default MetroLiniaList;