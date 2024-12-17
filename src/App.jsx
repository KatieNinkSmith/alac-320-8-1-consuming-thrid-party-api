import StarshipCard from "./components/StarshipCard";
import "./App.css";

function App() {
  const starshipName = "Millennium Falcon"; // Example starship name

  return (
    <>
      <StarshipCard name={starshipName} />
    </>
  );
}

export default App;
