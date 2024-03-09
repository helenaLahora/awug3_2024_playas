import React from 'react';
import './Card.css';

function BusParada({ busParada }) {
  if (!busParada || !busParada.NOM_PARADA || !busParada.CODI_PARADA) {
    return null;
  }

  const { NOM_PARADA, CODI_PARADA } = busParada;

  return (
    <li className="card">
      <h3>{NOM_PARADA}</h3>
      <p>{CODI_PARADA}</p>
    </li>
  );
}

export default BusParada;
