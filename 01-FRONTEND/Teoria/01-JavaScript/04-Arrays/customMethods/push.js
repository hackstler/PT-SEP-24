// El método push() añade uno o más elementos al final de un array
// añade uno o más elementos
// Devuelve la nueva longitud del array.

// Definimos una función llamada pushCustom que toma un array y múltiples elementos

function pushCustom(array, ...elementos) {
  // Inicia un bucle for para iterar sobre cada elemento recibido en 'elementos'
  for (let index = 0; index < elementos.length; index++) {
    // Agrega el elemento actual al final del array.
    // 'array.length' proporciona el índice en el cual se debe insertar el elemento actual
    array[array.length] = elementos[index];
  }

  // Retorna la nueva longitud del array después de agregar todos los elementos
  return array.length;
}

pushCustom([], "jirafa"); // 'jirafa'
pushCustom([], "jirafa", "elefante", "rinoceronte"); // ['jirafa', 'elefante', 'rinoceronte']

const animals = ["pigs", "goats", "sheep"];
const count = animals.push("cows");
const count2 = pushCustom(animals, "dogs");
