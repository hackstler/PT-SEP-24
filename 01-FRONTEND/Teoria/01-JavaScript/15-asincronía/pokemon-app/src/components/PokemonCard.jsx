/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const PokemonCard = ({ name, url }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setPokemonData(data);
    };

    fetchPokemonData();
  }, [url]);

  return (
    <div className='pokemon-card'>
      <h2>{name}</h2>
      {pokemonData ? (
        <>
          <img src={pokemonData.sprites.front_default} alt={name} />
          <p>
            Type: {pokemonData.types.map((type) => type.type.name).join(", ")}
          </p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PokemonCard;
