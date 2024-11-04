const starWarsDatabase = {
  movies: [
    {
      title: "A New Hope",
      release_year: 1977,
      characters: [
        { name: "Luke Skywalker", homeworld: "Tatooine", species: "Human" },
        { name: "Darth Vader", homeworld: "Tatooine", species: "Human" },
      ],
      starships: [
        { name: "X-wing", model: "T-65 X-wing" },
        { name: "TIE Advanced x1", model: "Twin Ion Engine" },
      ],
    },
    {
      title: "The Empire Strikes Back",
      release_year: 1980,
      characters: [
        { name: "Yoda", homeworld: "Dagobah", species: "Unknown" },
        { name: "Han Solo", homeworld: "Corellia", species: "Human" },
      ],
      starships: [
        { name: "Millennium Falcon", model: "YT-1300" },
        { name: "Slave I", model: "Firespray-31" },
      ],
    },
  ],
};
console.log("🚀 ~ starWarsDatabase:", starWarsDatabase.movies);

// ### **Ejercicio 1: Listar todas las películas y sus años de estreno**

// #### Enunciado

// Queremos crear una función que imprima cada título de película y su año de estreno en la consola.
// Objetivo: Imprimir el titulo y el año de de la pelicula
// Datos: startWarsDatabase.movies

// PASO 1: acceder al array de movies
// PASO 2: iterar el array con un bucle y sacar la informacion
// PASO 3: Ver la informacion por consola

// Variables: peliculas

function listarPelicular(data) {
  const peliculas = data.movies;

  for (let index = 0; index < peliculas.length; index++) {
    console.log("🚀 ~ listarPelicular ~ index:", index);
    const pelicula = peliculas[index]; // pelicula que representa la posicion(indice) actual
    console.log(`Titulo: ${pelicula.title} Y Año: ${pelicula.release_year}`);
  }
}

listarPelicular(starWarsDatabase);
