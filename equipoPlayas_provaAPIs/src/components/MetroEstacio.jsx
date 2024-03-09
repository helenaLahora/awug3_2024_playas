import React from 'react';
import './Card.css';

function MetroEstacio({ metroEstacio }) {
  if (!metroEstacio || !metroEstacio.NOM_ESTACIO || !metroEstacio.ID_ESTACIO) {
    return null;
  }

  const { NOM_ESTACIO, ID_ESTACIO } = metroEstacio;

  return (
    <li className="card">
      <h3>{NOM_ESTACIO}</h3>
      <p>{ID_ESTACIO}</p>
    </li>
  );
}

export default MetroEstacio;