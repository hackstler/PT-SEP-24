//! -------- TIPOS DE DATOS ------ //

//? --- Primitivos / primitive ---> number, string, boolean, undefined, null
/*
no llevan una estructura propia dentro
inmutables
solo que llevan un valor
*/

let number = 5; // number

let string = "hola qué tal"; // cadena de texto o string
let string2 = 'hola otra vez'; // esto también es un string

let verdadero = true; // dato booleano true --> 1
let falso = false; // dato booleano false --> 0

let noDefinido = undefined; // la variable no tiene un valor definido, entonces es undefined

let vacio = null; // no hay nada dentro de esa variable


//? --- Estructurales / reference ---> array, object, function

/*
llevan una estructura propia dentro
nos permiten gestionar datos primitivos
pueden llevan más de un tipo de dato y valor
*/

// ARRAY ---> colección de datos separados por comas
let array = [
    "hola", 
    2334, 
    true, 
    false, 
    null, 
    {
        nombre: 'Bea',
        empresa: 'Neoland'
    },
    'otro texto'
]; 

// OBJECT ---> coleccion de datos en forma de clave:valor tambien separados por comas
let objeto = {
    //clave : valor,
    nombre : "Bea",
    edad : 33,
    mascota : "Uma",
}; 

// FUNCIONES ---> es una accion que podemos reutilizar

let funcion = function nombre(parametro1, parametro2) {
    // instruccion ---> codigo que queramos
}

//// NaN ---> Not a Number
// entidades no numericas, tipos de dato que no son number aunque lleven dentro un numero



//! --------- STRING --------- //
// cadenas de texto
// comillas dobles "" o simples ''
// podemos encadenar o combinar dos o más string usando el operador +
// son "array like", se leen como una colección de letras, empieza a contar por el 0

let nombre = 'Uma';
let apellido = "Thurman";
let edad = 7;

let nombreCompleto = nombre + apellido; // UmaThurman

/* string interpolation ---> con comilla `` podemos encapsular variables con diferentes tipos de dato 
y formar frases con espacios y diferentes variables*/

let nombreCompletoEspacios = `Me llamo ${nombre} ${apellido} y tengo ${edad} años`;
// Me llamo Uma Thurman y tengo 7 años

let texto = "Me llamo Uma Thurman y tengo 7 años";
/* console.log(texto.length); // 35 ---> es el numero de letras y espacios, de elementos, que tiene ese string
console.log(texto[0]); // M
console.log(texto[34]); // s */


//! --------- TYPE OF() --------- //
// método que nos dice qué tipo de dato es lo que queramos saber

/* let forma = "redonda";
console.log(typeof forma); // string

let cantidad = 243;
console.log(typeof cantidad); // number

let mentira = false;
console.log(typeof mentira); // boolean

let frutas = ["manzana", "plátano", "granada"]; // object ---> Array []
console.log(typeof frutas);

let coche = {
    marca : "audi",
    modelo : "a4",
    puertas : 5,
    electrico : false,
}
console.log(typeof coche); // object ---> Object {clave : valor}

let hola = function () {
    console.log("hola");
}
console.log(typeof hola); // function */

//! --------- USANDO OPERADOR + CON DATOS PRIMITIVOS --------- //
/* cuando usamos el operador + con number y string se hace una conversión del tipo de dato
se llama "type coertion" y da como resultado un string, funciona como una encadenacion de
cadenas de texto 

si sumamos dos o varios datos booleanos nos da como resultado la suma final, de 1 y 0,
y un tipo de dato number

si hay más de una operación y tenemos que calcular el resultado
el ordenador hace las operaciones una a una, va por pasos,
primero hace una y luego la siguiente y en la ultima nos da el resultado
*/

console.log(5 + 5); // 10 ---> number
console.log("hola" + "mundo"); // holamundo ---> string
console.log(2 + "hola"); // 2hola ---> string
console.log(2 + "2"); // 22 ---> string
console.log(true + false); // 1 ---> 1 + 0 = 1 ---> number

console.log(1 < 2 < 3); // true ---> boolean
// 1 < 2 = true ---> 1 < 3 = true

console.log(3 > 2 > 1); // false ---> boolean
// 3 > 2 = true ---> 1 > 1 = false

console.log(2 + 2 + "2"); // 42 ---> string
// 2 + 2 = 4 y la sumando "2" ---> se convierte es string = "42"


