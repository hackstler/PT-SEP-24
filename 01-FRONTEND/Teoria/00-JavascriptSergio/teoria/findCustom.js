// Datos de ejemplo
const numeros = [3, -1, 5, -7, 8, -2];

// Función principal: encuentra el primer número negativo y observa los parámetros de `find`
function encontrarPrimerNumeroNegativoConDetalles(numerosArray) {
  // Usamos `find` y observamos cada parámetro del callback
  const primerNegativo = numerosArray.find((numero, indice, array) => {
    console.log(
      `Elemento actual: ${numero}, Índice: ${indice}, Array completo: ${array}`
    );
    return numero < 0; // Devuelve `true` si el número es negativo
  });

  return primerNegativo; // Devuelve el primer número negativo encontrado
}

// Probamos la función
console.log(encontrarPrimerNumeroNegativoConDetalles(numeros));
// Resultado esperado: -1

// ----------------------------------------------------
// Simulación del método `find` para entender su funcionamiento
// ----------------------------------------------------
function customFind(array, callback) {
  // Recorremos cada elemento del array original
  for (let i = 0; i < array.length; i++) {
    // Llamamos a `callback` pasando el elemento, el índice y el array completo
    if (callback(array[i], i, array)) {
      // Si el callback devuelve `true`, retornamos el elemento actual
      return array[i];
    }
  }
  return undefined; // Si ningún elemento cumple la condición, devolvemos `undefined`
}

// Probamos nuestra implementación de `customFind`
console.log(customFind(numeros, (numero) => numero < 0));
// Resultado esperado: -1
