import { useEffect, useState } from "react";
import React from "react";

function SwApi() {
  const [starships, setStarships] = useState(null);

  const url = "https://swapi.py4e.com/api/starships/";

  const getAllStarships = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setStarships(data);
    } catch (err) {
      console.error(err);
    }
  };
  console.log(starships);
  useEffect(() => {
    getAllStarships(url);
  }, []);

  const loaded = () => {
    return (
      <div>
        <ul>
          {starships.results.map((starship) => (
            <li key={starship.url}>
              {starship.name} - Model: {starship.model}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (
    <div>
      <h1>Star Wars Starships</h1>
      {starships && starships.results ? loaded() : loading()}
    </div>
  );
}

export default SwApi;
