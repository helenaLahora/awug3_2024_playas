import React from 'react';
import './Card.css';

function BusLinia({ busLinia }) {
  const { NOM_LINIA, ORIGEN_LINIA } = busLinia;

  return (
    <li className="BusLinia">
        <h2>{NOM_LINIA}</h2>
        <p>{ORIGEN_LINIA}</p>
    </li>
  );
}

export default BusLinia;