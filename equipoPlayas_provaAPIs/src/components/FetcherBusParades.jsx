import React, { useState, useEffect } from 'react';

function FetcherBusParades({ children }) {
  const [data, setData] = useState([]); // Estat per emmagatzemar les dades rebudes de l'API
  const [loading, setLoading] = useState(true); // Estat per controlar si es està carregant
  const [error, setError] = useState(null); // Estat per emmagatzemar els errors

  useEffect(() => {
    setLoading(true); // Indiquem que comença la càrrega

    fetch('https://api.tmb.cat/v1/transit/parades?app_id=b2840f13&app_key=8d96b390bd3dab7a484de10fbce6e435&limit=15') // Fem una crida a l'API
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al recollir dades: Parades de bus'); // Llençar error si la resposta no és ok
        }
        return response.json(); // Convertim la resposta a JSON
      })
      .then(data => {
        // Flatten the array of arrays into a single array
        const flattenedData = data.features.flatMap(feature => feature);

        setData(flattenedData); // Emmagatzemem les dades rebudes a l'estat
        setLoading(false); // Indiquem que hem acabat de carregar
      })
      .catch(error => {
        setError(error); // Emmagatzemem l'error en cas que n'hi hagi
        setLoading(false); // Indiquem que hem acabat de carregar
      });
  }, []);


  // Retornem els components 'children' amb les dades, l'estat de càrrega i els errors com a propietats
  return children({ data, loading, error });
}

export default FetcherBusParades;