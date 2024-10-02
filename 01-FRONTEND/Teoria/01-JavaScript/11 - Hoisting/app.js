//! ---------- HOISTING -------- //
// javascript permite acceder a funciones y variables antes de que hayan sido creadas
// para esto usamos var

//? Ejemplo 1 --> código en orden de creación y ejecución

var dato = 'ordenador macbook pro'
console.log(dato); // ordenador macbook pro

function ordenador(unDato) {
    console.log(`este es un ${unDato}`);
    
}
ordenador(dato) // este es un ordenador macbook pro

//? Ejemplos 2 --> código 'desordenado'
// podemos llamar a la función en cualquier punto del código
// no podemos imprimir la variable antes de crearla

console.log(desordenada);

desordenada()

var desordenada = 'estoy en otra linea';

console.log(desordenada); // estoy en otra linea --> una vez creada la variable si la imprime


function desordenada() {
    console.log('estoy en otra linea y soy una función');
}

desordenada()

// 1 . lee y guarda en memoria la función --> linea 29
// 2 . llama a la función --> linea 22
// 3 . llama a la función --> linea 33


//// Fases del Hoisting

//* Fase de creación
// creamos la función
// ha guardado la función primero y la llama en cualquier punto del código

//* Fase de ejecución
// el código se ejecuta línea por línea con la información que ha guardado
// si encuentra una variable --> la imprime si está declarada
// si encuentra una función --> la ejecuta en cualquier punto