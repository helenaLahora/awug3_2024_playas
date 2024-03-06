import React from 'react';
import './Card.css';

function BusParada({ busParada }) {
  const { NOM_PARADA, CODI_PARADA } = busParada;

  return (
    <li className="BusParada">
      <h2>{NOM_PARADA}</h2>
      <p>{CODI_PARADA}</p>
    </li>
  );
}

export default BusParada;