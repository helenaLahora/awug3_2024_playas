import React from 'react';
import './Card.css';

function MetroLinia({ metroLinia }) {
  const { NOM_LINIA, DESC_LINIA } = metroLinia;

  return (
    <li className="MetroLinia">
      <h2>{NOM_LINIA}</h2>
      <p>{DESC_LINIA}</p>
    </li>
  );
}

export default MetroLinia;