import React from 'react';
import './Card.css';

function MetroEstacio({ metroEstacio }) {
  const { NOM_ESTACIO, ID_ESTACIO } = metroEstacio;

  return (
    <li className="MetroEstacio">
        <h2>{NOM_ESTACIO}</h2>
        <p>{ID_ESTACIO}</p>
    </li>
  );
}

export default MetroEstacio;