import React from 'react';
import FetcherBusParades from './FetcherBusParades';
import BusParada from './BusParada';
import './List.css';
import Loader from './Loader';

function BusParadaList() {
  return (
    <FetcherBusParades>
      {({ data, loading, error }) => {
        if (loading) {
          return <Loader />; // Mostrar l'indicador de càrrega mentre es carreguen les dades
        }

        if (error) {
          return <div className="error">{error.message}</div>; // Mostrar missatge d'error en cas d'error
        }

        return (
          <div className="listContainer">
            <h2>Parades de Bus</h2>
            <ul className="cardContainer">
              {data.map(busParada => (
                busParada.properties ? (
                  <BusParada key={busParada.id} busParada={busParada.properties} /> // Renderitzar la llista de parades de bus
                ) : null
              ))}
            </ul>
          </div>
        );
      }}
    </FetcherBusParades>
  );
}

export default BusParadaList;