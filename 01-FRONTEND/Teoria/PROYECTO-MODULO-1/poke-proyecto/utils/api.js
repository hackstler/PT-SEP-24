// Define la URL base de la PokeAPI para facilitar la reutilización en diferentes peticiones.
const API_BASE = "https://pokeapi.co/api/v2";

// Exporta una función asíncrona llamada `pedirPokemons` para obtener una lista de Pokémon desde la API.
export async function pedirPokemons() {
  // Realiza una solicitud HTTP a la URL que obtiene los Pokémon, utilizando la función `fetch`.
  // `await` asegura que se espere a que la respuesta esté disponible antes de continuar.
  const response = await fetch(`${API_BASE}/pokemon`);

  // Imprime en la consola la respuesta completa obtenida de la API, para depuración.
  console.log("🚀 ~ pedirPokemons ~ response:", response);

  // Convierte la respuesta de la API en un objeto JSON. `await` asegura que se espere a la conversión antes de seguir.
  const data = await response.json();

  // Imprime en la consola el objeto `data`, que contiene toda la información JSON obtenida de la API.
  console.log("🚀 ~ pedirPokemons ~ data:", data);

  // Imprime en la consola solo la propiedad `results` de `data`, que contiene una lista de los Pokémon.
  console.log("🚀 ~ pedirPokemons ~ data.results:", data.results);

  // Retorna el array `results` de `data`, que contiene los Pokémon con detalles básicos.
  return data.results;
}

// Exporta una función asíncrona llamada `pedirMasInfoDelPokemon` para obtener más detalles de un Pokémon específico.
// Toma como argumento `url`, que es la URL específica del Pokémon en la API, por ejemplo: "https://pokeapi.co/api/v2/pokemon/19/".
export async function pedirMasInfoDelPokemon(url) {
  // Realiza una solicitud HTTP a la URL especificada (`url`) usando `fetch`.
  // `await` asegura que la ejecución espere a la respuesta antes de continuar.
  const response = await fetch(url);

  // Convierte la respuesta a JSON para obtener los datos en formato de objeto.
  const data = await response.json();

  // Retorna el objeto `data` que contiene los detalles completos del Pokémon.
  return data;
}
