import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemon }) => {
  return (
    <div className='pokemon-list'>
      {pokemon.map((poke, index) => (
        <PokemonCard key={index} name={poke.name} url={poke.url} />
      ))}
    </div>
  );
};

export default PokemonList;
