import React from 'react';
import './Card.css';

function BusLinia({ busLinia }) {
  if (!busLinia || !busLinia.NOM_LINIA || !busLinia.ORIGEN_LINIA) {
    return null;
  }

  const { NOM_LINIA, ORIGEN_LINIA } = busLinia;

  return (
    <li className="card">
      <h3>{NOM_LINIA}</h3>
      <p>{ORIGEN_LINIA}</p>
    </li>
  );
}


export default BusLinia;