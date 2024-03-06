import React, { useState, useEffect } from 'react';

function FetcherBusLinies({ children }) {
  const [data, setData] = useState([]); // State to store the data received from the API
  const [loading, setLoading] = useState(true); // State to control loading status
  const [error, setError] = useState(null); // State to store errors

  useEffect(() => {
    setLoading(true); // Indicate that loading has started

    fetch('https://api.tmb.cat/v1/transit/linies/bus?app_id=b2840f13&app_key=8d96b390bd3dab7a484de10fbce6e435')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching data: Bus lines'); // Throw error if response is not ok
        }
        return response.json(); // Convert response to JSON
      })
      .then(data => {
        // Flatten the array of arrays into a single array
        const flattenedData = data.features.flatMap(feature => feature);

        setData(flattenedData); // Store the received data in state
        setLoading(false); // Indicate that loading has finished
      })
      .catch(error => {
        setError(error); // Store the error if any
        setLoading(false); // Indicate that loading has finished
      });
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  // Return the children components with data, loading status, and error as props
  return children({ data, loading, error });
}

export default FetcherBusLinies;