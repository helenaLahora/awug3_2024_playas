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
          return <Loader />; // Show loading indicator while data is being loaded
        }

        if (error) {
          return <div className="error">{error.message}</div>; // Show error message in case of error
        }

        return (
          <ul className="BusLinia-list">
            {data.map(busLinia => (
              // Check if busLinia.properties exists before rendering
              busLinia.properties ? (
                <BusLinia key={busLinia.id} busLinia={busLinia.properties} /> // Render the bus line list
              ) : null
            ))}
          </ul>
        );
      }}
    </FetcherBusLinies>
  );
}

export default BusLiniaList;