// Exporta la función `crearPokemonInfoCards` para que esté disponible en otros módulos.
export function crearPokemonInfoCards(pokemon) {
  // Crea un nuevo elemento `div` que servirá como contenedor o "tarjeta" para mostrar la información del Pokémon.
  const card = document.createElement("div");

  // Agrega la clase "card" al elemento `div`, permitiendo que puedas aplicar estilos específicos desde CSS.
  card.classList.add("card");

  // Define el contenido HTML dentro de la tarjeta. Se utiliza `innerHTML` para establecer este contenido.
  card.innerHTML = `
        <!-- Muestra el nombre del Pokémon dentro de una etiqueta <h3> -->
        <h3>${pokemon.name}</h3>

        <!-- Muestra la imagen del Pokémon usando el sprite frontal por defecto -->
        <img src="${pokemon.sprites.front_default}" >

        <!-- Muestra los tipos del Pokémon, mapeados para extraer solo el nombre de cada tipo -->
        <p>${pokemon.types.map((typeElement) => typeElement.type.name)}</p>
    `;

  // Retorna la tarjeta completa (`card`) para que se pueda agregar a la interfaz en otro lugar del código.
  return card;
}
