import React from 'react';
import FetcherBusLinies from './FetcherBusLinies';
import BusLinia from './BusLinia';
import './List.css';
import Loader from './Loader';

function BusLiniaList() {
  return (
    <FetcherBusLinies>
      {({ data, loading, error }) => {
        if (loading) {
          return <Loader />; // Mostrar l'indicador de càrrega mentre es carreguen les dades
        }

        if (error) {
          return <div className="error">{error.message}</div>; // Mostrar missatge d'error en cas d'error
        }

        return (
          <div className="listContainer">
            <h2>Linies de Bus</h2>
            <ul className="cardContainer">
              {data.map(busLinia => (
                busLinia.properties ? (
                  <BusLinia key={busLinia.id} busLinia={busLinia.properties} /> // Renderitzar la llista
                ) : null
              ))}
            </ul>
          </div>
        );
      }}
    </FetcherBusLinies>
  );
}

export default BusLiniaList;