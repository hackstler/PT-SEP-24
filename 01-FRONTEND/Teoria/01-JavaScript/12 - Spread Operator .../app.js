//! ----------- SPREAD OPERATOR ------- // 
// es una funcionalidad de javascript que permite copiar {objetos} o [arrays]

//// COPIAR

const animales = ['gato', 'perro', 'hurón', 'cerdo'];
const copiaAnimales = [...animales]

console.log(animales); // [ 'gato', 'perro', 'hurón', 'cerdo' ]
console.log(copiaAnimales); // [ 'gato', 'perro', 'hurón', 'cerdo' ]

// son iguales? --> no son iguales, uno es una copia de otro pero son objetos diferentes
console.log(animales == copiaAnimales); // false
console.log(animales === copiaAnimales); // false


//// CONCATENAR

const deportes = [ 'futbol', 'baloncesto', 'piragüismo'];
const masDeportes = [ 'esgrima', 'balonmano'];
const todosDeportes = [ ...deportes, ...masDeportes]

console.log(todosDeportes); // [ 'futbol', 'baloncesto', 'piragüismo', 'esgrima', 'balonmano' ]


//// USAR LOS VALORES DE UN OBJETO COMO PARÁMETROS DE UNA FUNCIÓN

const pares = [ 2, 4, 6 ]
const impares = [ 1, 3, 5 ]

const suma = function (a, b, c) {
    return a + b + c
}

console.log(suma(...pares)); // suma de los pares --> 12
console.log(suma(...impares)); // suma de los impares --> 9


//// CLONAR UN { OBJETO } Y MODIFICARLO

const animal = {
    nombre : 'Nala',
    especie : 'perro',
    edad : 7,
    color: 'marron',
    ladra : true
};

const copiaAnimal = {...animal}
console.log(copiaAnimal); // me saca una copia de animal

// son iguales? --> no son iguales, uno es una copia de otro pero son objetos diferentes
console.log(animal == copiaAnimal); // false
console.log(animal === copiaAnimal); // false

//* otro uso --> crear una copia sin una de sus propiedades

const { color, ...unAnimal } = animal;
// declaro una variable const con Destructuring
    // crea una copia del objeto animal
    // lo llama unAnimal y dentro tiene la info de animal
    // le quita la propiedad color

console.log(unAnimal); // { nombre: 'Nala', especie: 'perro', edad: 7, ladra: true }

//* copiar un objeto y modificar una de las propiedades

const carrito = { 
    producto : 'Bici', 
    cantidad : 1 
}

// cambio de cantidad en carrito a 5
carrito.cantidad = 5;
console.log(carrito); // { producto: 'Bici', cantidad: 5 }

// creo una copia de carrito y la cambio a 10
const nuevoCarrito = {
    ...carrito,
    cantidad : 10
}
console.log(nuevoCarrito); // { producto: 'Bici', cantidad: 10 }

// otra copia de carrito haciendo una suma de 2 en la cantidad
const otroCarrito = {
    ...carrito,
    cantidad : carrito.cantidad + 2
}
console.log(otroCarrito); // { producto: 'Bici', cantidad: 7 }

//// DESTRUCTURING

const empleado = {
    nombre : 'Bruno',
    apellido : 'García',
    puesto : 'Teacher'
}
// de forma manual --> saco los valores de empleado

console.log(empleado.nombre); // Bruno
console.log(empleado.apellido); // García
console.log(empleado.puesto); // Teacher

// con destructuring

const { nombre, apellido, puesto } = empleado;


