import React from 'react';
import './Card.css';

function BusLinia({ busLinia }) {
  const { NOM_LINIA, ORIGEN_LINIA } = busLinia;

  return (
    <li className="card">
        <h3>{NOM_LINIA}</h3>
        <p>{ORIGEN_LINIA}</p>
    </li>
  );
}

export default BusLinia;