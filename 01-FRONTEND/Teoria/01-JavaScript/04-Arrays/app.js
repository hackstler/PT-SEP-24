//! -------- ARRAY ------- //
// colección de datos, lista ordenada de datos
// puede contener number, string, boolean, null, undefined, function, object
// los datos se separan con comas ,

//? Crear un array

// antigua
let formaAntigua = new Array(); // esto es un array vacío
console.log(formaAntigua); // []

// moderno
let formaModerna = []; // creamos un array directamente con dos corchetes
console.log(formaModerna); // []

//? Mezclar datos en un array
let coleccion = [
    "Manzana",
    2746,
    true,
    false,
    {
        clave : "valor",
        nombre : "María"
    },
    [
        "botella", 
        "vaso", 
        2
    ],
    function () {
        console.log("hola qué tal");
    }
];

console.log(coleccion[0]); // Manzana
console.log(coleccion[5]); // [ 'botella', 'vaso', 2 ]
console.log(coleccion[5][1]); // vaso
console.log(coleccion[4]); // { clave: 'valor', nombre: 'María' }
console.log(coleccion[4].nombre); // María
console.log(coleccion[6]); // [Function (anonymous)]
console.log(coleccion[6]()); // hola qué tal

console.log(coleccion.length); // 7 --> devuelve la longitud del array


//! --- Métodos de arrays --- /

//// push()
// añade elementos al final del array
// devuelve la nueva longitud del array
// modifica el array añadiendo elementos

let frutas = ['kiwi', 'granada'];
frutas.push('platano'); // 3 --> el método devuelve la nueva longitud del array
console.log(frutas); // [ 'kiwi', 'granada', 'platano' ] --> después del método añade el elemento al array

//// pop()
// elimina y devuelve el último elemento del array
// modifica el array

let coches = ['audi', 'volkswagen', 'seat'];
let ultimoCoche = coches.pop();
console.log(coches); // [ 'audi', 'volkswagen' ] --> elimina el último elemento del array
console.log(ultimoCoche); // seat --> devuelve ese elemento eliminado

//// unshift()
// añade elementos al inicio del array
// modifica el array
// devuelve la longitud del array modificado con el nuevo elemento

let comida = ['fruta', 'pastel', 'lentejas'];
console.log(comida.unshift('tortitas')); // 4
console.log(comida); // [ 'tortitas', 'fruta', 'pastel', 'lentejas' ]


//// shift()
// elimina y devuelve el primer elemento del array
// modifica el array

let automoviles = ['moto', 'bus', 'coche'];
console.log(automoviles.shift()); // moto
console.log(automoviles); // [ 'bus', 'coche' ]


//// slice()
// devuelve una copia de una parte del array
// no modifica el array original, hace una copia
// necesita dos parámetros --> inicio y fin
// el inicio se incluye en el nuevo array, el fin no se incluye

let ropa = ['camisa', 'calcetines', 'abrigo', 'zapatos', 'bolso'];
let menosRopa = ropa.slice(1,3);
console.log(ropa); // [ 'camisa', 'calcetines', 'abrigo', 'zapatos', 'bolso' ]
console.log(menosRopa); // [ 'calcetines', 'abrigo' ]


//// splice()
// elimina y/o añade elementos en el indice (index) que le indiquemos
// devuelve el/los elemento/s que elimina
// modifica el array original

/* necesita mínimo tres argumentos --> 
- índice del inicio --> 1, empieza a eliminar en el indice 1 del array
- número de elementos --> 1, elimina un elemento
- nuevo/s elemento/s --> añade esgrima y skate
*/

let deportes = ['baloncesto', 'futbol', 'tenis'];
let nuevosDeportes = deportes.splice(1, 1, 'esgrima', 'skate')
console.log(deportes); //  ['baloncesto', 'esgrima', 'skate', 'tenis' ]
console.log(nuevosDeportes); // [ 'futbol' ]

let paises = ['España', 'Portugal', 'Francia', 'Alemania', 'Polonia'];
let nuevosPaises = paises.splice(1, 0, 'EEUU');
console.log(paises); // [ 'España', 'EEUU', 'Portugal', 'Francia', 'Alemania', 'Polonia' ]
console.log(nuevosPaises); // [] --> devuelve un array vacio porque no le he dicho que elimina nada


//// concat()
// combina/une/concatena dos o más arrays en un nuevo array
// no modifica los arrays originales
// crea un nuevo array 

let a = [1, 2, 3];
let b = [4, 5, 6];
let c = [7, 8, 9];

let unirDos = a.concat(b); // [ 1, 2, 3, 4, 5, 6 ]
console.log(unirDos);

let unirTres = a.concat(b,c); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(unirTres);