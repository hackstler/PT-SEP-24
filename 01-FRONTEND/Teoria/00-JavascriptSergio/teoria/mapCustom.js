// Datos de ejemplo
const nombres = ["ana", "carlos", "luisa"];

// Función principal: convierte cada nombre a mayúsculas usando `map` y observa los parámetros
function convertirNombresAMayusculasConDetalles(nombresArray) {
  // Usamos `map` y trabajamos con cada parámetro del callback
  const nombresMayusculas = nombresArray.map((nombre, indice, array) => {
    console.log(
      `Elemento actual: ${nombre}, Índice: ${indice}, Array completo: ${array}`
    );
    return nombre.toUpperCase(); // Convierte el nombre a mayúsculas
  });

  return nombresMayusculas; // Devuelve el nuevo array con los nombres en mayúsculas
}

// Probamos la función
console.log(convertirNombresAMayusculasConDetalles(nombres));
// Resultado esperado: ["ANA", "CARLOS", "LUISA"]

// ----------------------------------------------------
// Simulación del método `map` para entender su funcionamiento
// ----------------------------------------------------
function customMap(array, callback) {
  const resultArray = []; // Array donde almacenaremos los resultados

  // Recorremos cada elemento del array original
  for (let i = 0; i < array.length; i++) {
    // Llamamos a `callback` pasando el elemento, el índice y el array completo
    const transformedElement = callback(array[i], i, array);
    // Agregamos el resultado al nuevo array
    resultArray.push(transformedElement);
  }

  return resultArray; // Devolvemos el array con los elementos transformados
}

// Probamos nuestra implementación de `customMap`
console.log(customMap(nombres, (nombre) => nombre.toUpperCase()));
