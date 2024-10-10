import { useState } from "react";

const PokemonSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPokemon = (name) => {
    setLoading(true);
    setError(null);
    setPokemon(null);

    fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
      .then((response) => {
        if (!response.ok) throw new Error("Pokémon not found");
        return response.json();
      })
      .then((data) => {
        setPokemon(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      fetchPokemon(searchTerm);
    }
  };

  return (
    <div className='pokemon-search'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter Pokémon name'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {pokemon && (
        <div className='pokemon-details'>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Type: {pokemon.types.map((type) => type.type.name).join(", ")}</p>
        </div>
      )}
    </div>
  );
};

export default PokemonSearch;
