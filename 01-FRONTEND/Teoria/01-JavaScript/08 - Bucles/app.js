//! -------------- BUCLES / LOOPS -------------- //
// es algo que se repite
// en javascript podemos usar bucles para controlar cómo y cuánto repetimos una acción

//// for
// i es la variable que funciona dentro del bucle, como los parámetros en las funciones
// inicialización del bucle ---> let i = 0 ---> donde inicia el registro
// condición ---> i <= 10 ---> ejecuta el código hasta el punto que queramos, en este caso ejecuta el código 10 veces
// iterador ---> i++ ---> indica cómo continúa el bucle después de cada registro ---> en este caso de uno en uno, se incrementa en 1

// Contamos de 0 a 10

for (let i = 0; i <= 10; i++) {
    console.log(i);
}
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

// Con este bucle multiplicamos *2 los 10 primeros números empezando por el 0

for (let i = 0; i <= 10; i++) {
    console.log(i * 2);
}
// 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

// Contar desde 10 hacía atrás, decremento en 1 (i--) y termina en 0

for (let i = 10; i >= 0; i--) {
    console.log(i);
}
// 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0


//* Ejercicio bucle for
// De una lista de números del 1 al 15
// si sacamos el 13 le decimos que da mala suerte
// si sacamos otro número le decimos que todo ok

let listaNumeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];

for (let elemento = 0; elemento < listaNumeros.length; elemento++) {
    if (listaNumeros[elemento] === 13) {
        console.log(elemento, 'MALA SUERTE 💀');
    } else {
        console.log(elemento, 'OK 😀');
    }
}
