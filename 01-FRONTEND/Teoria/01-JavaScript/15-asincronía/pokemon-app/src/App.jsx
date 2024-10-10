// src/App.jsx
import { useEffect, useState } from "react";
import PokemonList from "./components/PokemonList";
import PokemonSearch from "./components/PokemonSearch";
import "./index.css";

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=20"
        );
        if (!response.ok) throw new Error("Failed to fetch Pokémon");
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  if (loading) return <p>Loading Pokémon...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='app'>
      <h1>Pokémon List</h1>
      <PokemonSearch />
      <PokemonList pokemon={pokemon} />
    </div>
  );
};

export default App;
