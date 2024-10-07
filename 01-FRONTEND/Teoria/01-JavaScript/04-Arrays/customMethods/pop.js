
// Validar la longitud del array y si no tiene devuelve undefined
// El método pop() elimina el último elemento de un array 
// Y lo devuelve. 
// Este método cambia la longitud del array.


// 1. Ver que contiene el array, ver si el array esta vacio
// 2. Guardar el ultimo elemento del array
// 3. Elimina el último elemento de un array
// 4. Devolver el ultimo elemento

function popArray(array) {
    if (array.length === 0) return undefined; // si el array esta vacio devolvemos undefined
    const lastElement = array[array.length - 1]; // almacenamos el ultimo elemento para devolverlo
    array.length = array.length - 1; // eliminamos el ultimo elemento
    return lastElement; // devolvemos la informacion del ultimo elemento
}

const numeros = [1,2];
console.log(popArray(numeros));  // Muestra 2
console.log(numeros);  // Muestra [1]
