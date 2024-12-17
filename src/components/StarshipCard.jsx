import React, { useEffect, useState } from "react";
import { getAllStarships } from "../../services/sw-api";

function StarshipCard() {
  const [starships, setStarships] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://swapi.py4e.com/api/starships/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllStarships(url);
        setStarships(data);
      } catch (err) {
        setError("Failed to fetch starships");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const renderStarships = () => {
    return (
      <div>
        <h1>Star Wars Starships</h1>
        <ul>
          {starships.results.map((starship) => {
            // Determine the border color based on the starship name
            const getBorderColor = (name) => {
              if (
                name.includes("TIE") ||
                name.includes("Star") ||
                name.includes("Executor")
              ) {
                return "red"; // Apply red border if any condition matches
              }
              return "Lightblue"; // Default border color
            };

            const borderColor = getBorderColor(starship.name);

            return (
              <li key={starship.url}>
                <div
                  className="card"
                  style={{
                    border: `2px solid ${borderColor}`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    // border: "2px solid lightblue",
                    margin: "0.5rem",
                    width: "300px",
                    height: "400px",
                    fontSize: "larger",
                    backgroundColor: "darkgrey",
                  }}
                >
                  <h2>Name: {starship.name}</h2>
                  <p>Model: {starship.model}</p>
                  <p>Manufacturer: {starship.manufacturer}</p>
                  <p>Class: {starship.starship_class}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const renderLoading = () => <h1>Loading...</h1>;

  const renderError = () => <h1>{error}</h1>;

  return (
    <div>
      {isLoading ? renderLoading() : error ? renderError() : renderStarships()}
    </div>
  );
}

export default StarshipCard;
