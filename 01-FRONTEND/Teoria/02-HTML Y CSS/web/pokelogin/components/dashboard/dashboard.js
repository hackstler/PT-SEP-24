import { checkLoginStatus, redirectToLogin } from "../../common.js";

document.addEventListener("DOMContentLoaded", () => {
  checkLoginStatus() ? loadPokemonList() : redirectToLogin();
});

/**
 * Carga la lista de Pokémon obtenida de la API y los muestra en el DOM.
 */
async function loadPokemonList() {
  const pokemonListElement = document.getElementById("pokemon-list");
  try {
    const pokemonList = await fetchPokemonList(10);
    const cardsHTML = pokemonList
      .map((pokemon) => createPokemonCardTemplate(pokemon))
      .join("");
    pokemonListElement.innerHTML = cardsHTML;
  } catch (error) {
    console.error("Error al obtener los Pokémon:", error);
  }
}

/**
 * Hace una llamada a la API para obtener una lista de Pokémon con un límite especificado.
 * @param {number} limit - Número de Pokémon a obtener.
 * @returns {Promise<Array>} - Retorna una lista de objetos Pokémon con nombre, ID y URL de imagen.
 */
async function fetchPokemonList(limit) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
  );
  const data = await response.json();
  const pokemonList = data.results;

  const detailedPokemonList = await Promise.all(
    pokemonList.map(async (pokemon) => {
      const pokemonDetails = await fetch(pokemon.url);
      const details = await pokemonDetails.json();
      return {
        name: details.name,
        id: details.id,
        image: details.sprites.front_default,
      };
    })
  );

  return detailedPokemonList;
}

/**
 * Crea la plantilla HTML para la card de un Pokémon.
 * @param {Object} pokemon - Objeto que contiene la información del Pokémon.
 * @param {string} pokemon.name - Nombre del Pokémon.
 * @param {number} pokemon.id - ID del Pokémon.
 * @param {string} pokemon.image - URL de la imagen del Pokémon.
 * @returns {string} - Retorna una cadena de HTML para la card del Pokémon.
 */
function createPokemonCardTemplate(pokemon) {
  return `
    <div class="card">
      <img class="pokemon-image" src="${pokemon.image}" alt="Imagen de ${pokemon.name}">
      <h2 class="pokemon-name">${pokemon.name}</h2>
      <p class="pokemon-info">ID: <span class="pokemon-id">${pokemon.id}</span></p>
    </div>
  `;
}
