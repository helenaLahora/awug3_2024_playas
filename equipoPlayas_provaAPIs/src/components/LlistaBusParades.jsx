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
          <ul className="BusParada-list">
            {data.properties.map(busParada => (
              <BusParada key={busParada.id} busParada={busParada} /> // Renderitzar la llista de parades de bus
            ))}
          </ul>
        );
      }}
    </FetcherBusParades>
  );
}

export default BusParadaList;