// Importa las funciones `pedirPokemons` y `pedirMasInfoDelPokemon` desde el archivo "api" en la carpeta "utils".
// Estas funciones permiten obtener una lista de Pokémon y detalles adicionales de cada Pokémon.
import { pedirPokemons, pedirMasInfoDelPokemon } from "./utils/api";

// Importa la función `crearPokemonInfoCards` desde el archivo "Card" en la carpeta "components".
// Esta función genera una tarjeta con la información de un Pokémon.
import { crearPokemonInfoCards } from "./components/Card";

// Selecciona el elemento HTML con el ID "pokemon-container", donde se añadirán las tarjetas de los Pokémon.
const pokemonContainer = document.getElementById("pokemon-container");

// Declara una función asíncrona `cargarPokemons` que se encarga de cargar y mostrar los Pokémon en la interfaz.
async function cargarPokemons() {
  // Llama a `pedirPokemons` para obtener la lista inicial de Pokémon desde la API.
  const pokemons = await pedirPokemons();

  // Utiliza `Promise.all` para hacer una solicitud adicional de información para cada Pokémon en `pokemons`.
  // Mapea cada elemento `pokemon` en la lista para obtener su URL y llama a `pedirMasInfoDelPokemon`.
  const pokemosConMasInfo = await Promise.all(
    pokemons.map((pokemon) => {
      return pedirMasInfoDelPokemon(pokemon.url);
    })
  );

  // Imprime en la consola el array `pokemosConMasInfo`, que ahora contiene objetos con la información detallada de cada Pokémon.
  console.log("🚀 ~ pokemosConMasInfo ~ pokemosConMasInfo:", pokemosConMasInfo);

  // Itera sobre cada elemento `pokemon` en `pokemosConMasInfo` para crear y mostrar una tarjeta con su información.
  pokemosConMasInfo.forEach((pokemon) => {
    // Llama a `crearPokemonInfoCards` para generar una tarjeta (`card`) con la información del Pokémon.
    const card = crearPokemonInfoCards(pokemon);

    // Imprime en la consola la tarjeta creada para este Pokémon, útil para verificar que se creó correctamente.
    console.log("🚀 ~ pokemosConMasInfo.forEach ~ card:", card);

    // Agrega la tarjeta creada al contenedor `pokemonContainer` en la página HTML.
    pokemonContainer.appendChild(card);
  });
}

// Llama a la función `cargarPokemons` para iniciar el proceso de carga y mostrar los Pokémon en la interfaz.
cargarPokemons();
