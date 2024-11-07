const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

// Función principal: filtra los números pares y observa los parámetros de `filter`
function filtrarNumerosParesConDetalles(numerosArray) {
  // Usamos `filter` y trabajamos con cada parámetro del callback
  const numerosPares = numerosArray.filter((numero, indice, array) => {
    console.log(
      `Elemento actual: ${numero}, Índice: ${indice}, Array completo: ${array}`
    );
    return numero % 2 === 0; // Devuelve `true` si el número es par
  });

  return numerosPares; // Devuelve el nuevo array con los números pares
}

// Probamos la función
console.log(filtrarNumerosParesConDetalles(numeros));
// Resultado esperado: [2, 4, 6, 8]

// ----------------------------------------------------
// Simulación del método `filter` para entender su funcionamiento
// ----------------------------------------------------
function customFilter(array, callback) {
  const resultArray = []; // Array donde almacenaremos los resultados

  // Recorremos cada elemento del array original
  for (let i = 0; i < array.length; i++) {
    // Llamamos a `callback` pasando el elemento, el índice y el array completo
    if (callback(array[i], i, array)) {
      // Si el callback devuelve `true`, añadimos el elemento al nuevo array
      resultArray.push(array[i]);
    }
  }

  return resultArray; // Devolvemos el array con los elementos que pasaron la condición
}
