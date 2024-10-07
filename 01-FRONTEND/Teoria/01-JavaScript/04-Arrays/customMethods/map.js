// El método map() crea un nuevo array 
// Con los resultados de la llamada a la función indicada, aplicados a CADA UNO de sus elementos.

// 1. Crear la funcion 
// 2. Añadir los parametros necesarios
// 3. Definir nuevo array a devolver
// 4. Recorrer el array actual
// 5. Aplicar la funcion callback a cada uno de los elemtos del array
// 6. Añdir al nuevo array el elemento modificado y devuelto por el callback
// 7. Devolver el nuevo array


function mapArray(array, callback) {
    const resultado = []; // definir nuevo array
    for (let i = 0; i < array.length; i++) { // iterar el array del que sacamos la informacion para construir uno nuevo
         const currentElement = array[i] // sacamos el valor actual del indice del array
        const newElement = callback(currentElement, i, array) // aplicamos al elemento actual la funcion callback
        resultado.push(newElement) // añadimos a nuestro nuevo array resultado el elemento nuevo que devuelve el callback
    }
    return resultado;
}