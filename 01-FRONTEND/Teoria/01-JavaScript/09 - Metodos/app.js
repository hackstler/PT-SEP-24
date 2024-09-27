//! ------------- METODOS -------- /

//// map
// ejecuta una función dada en cada elemento de un array

let listaNumeros = [ 1, 2, 3, 4, 5, 6 ];

//* calcular el cuadrado de cada numero
let listaNumerosCuadrado = listaNumeros.map(
    function (elemento) {
        return elemento * elemento
    }
)
console.log(listaNumerosCuadrado); // [ 1, 4, 9, 16, 25, 36 ]

//* calcular el cuadrado de los números pares y si no sacamos el original

let listaCuadradosPares = listaNumeros.map(
    function (elemento) {
        if (elemento % 2 == 0) {
            return elemento * elemento
        } else {
            return elemento
        }
    }
)
console.log(listaCuadradosPares); // [ 1, 4, 3, 16, 5, 36 ]

//* igual que el anterior con condicional ternario

let ternarioCuadradosPares = listaNumeros.map(
    function (elemento) {
        return elemento % 2 == 0 // condicion
        ? elemento * elemento // true
        : elemento // false
    }
)
console.log(ternarioCuadradosPares); // [ 1, 4, 3, 16, 5, 36 ]

//* igual que el anterior con condicional ternario y funcion arrow

let ternarioArrow = listaNumeros.map(elemento => elemento % 2 == 0 ? elemento * elemento : elemento)
console.log(ternarioArrow); // [ 1, 4, 3, 16, 5, 36 ]


//// filter
// devuelve los elementos de un array que cumplen una condición

//* filtramos los pares de una lista
const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

let pares = numeros.filter(e => e % 2 == 0)
console.log(pares); // [ 2, 4, 6, 8, 10 ]

//* filtramos las personas mayoes de 30 años
const personas = [
    { nombre : 'Bea', edad : 18},
    { nombre : 'Richard', edad : 45},
    { nombre : 'Josiel', edad : 41},
    { nombre : 'Alexander', edad : 55},
]

let mayores = personas.filter(e => e.edad > 30)
console.log(mayores);
/* 
        [
            { nombre: 'Richard', edad: 45 },
            { nombre: 'Josiel', edad: 41 },
            { nombre: 'Alexander', edad: 55 }
        ] 
*/

//// filter + includes
//* filtra todas las palabras que incluyan la letra 's'

const palabras = [ 'casa', 'mesa', 'pozo', 'perro' ];

let conLetraS = palabras.filter(e => e.includes('s'))
console.log(conLetraS); // [ 'casa', 'mesa' ]


//// filter + map

const listaRopa = [
    {
        prenda : 'pantalón',
        precio : 60
    },
    {
        prenda : 'camiseta',
        precio : 15
    },
    {
        prenda : 'abrigo',
        precio : 100
    }
];

//* lista con los articulos que puedo comprar con 70€

let ropaPrecio = listaRopa.filter(e => e.precio <= 70);
console.log(ropaPrecio); 
/* 
    [
        { prenda: 'pantalón', precio: 60 }, 
        { prenda: 'camiseta', precio: 15 }
    ]
*/

//* los nombres de los articulos que me puedo comprar con 70€ --> pantalón y camiseta

let nombresRopaPrecio = listaRopa.filter(e => {
    return e.precio <= 70
}).map(e => {
    return e.prenda
})

console.log(nombresRopaPrecio); // [ 'pantalón', 'camiseta' ]

//* resultado anterior simplificado ( sin {} y sin return )

let nombresSimple = listaRopa.filter(e => e.precio <= 70).map(e => e.prenda);
console.log(nombresSimple); // [ 'pantalón', 'camiseta' ]

