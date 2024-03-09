import React from 'react';
import './Card.css';

function MetroLinia({ metroLinia }) {
  if (!metroLinia || !metroLinia.NOM_LINIA || !metroLinia.DESC_LINIA) {
    return null;
  }

  const { NOM_LINIA, DESC_LINIA } = metroLinia;

  return (
    <li className="card">
      <h3>{NOM_LINIA}</h3>
      <p>{DESC_LINIA}</p>
    </li>
  );
}

export default MetroLinia;