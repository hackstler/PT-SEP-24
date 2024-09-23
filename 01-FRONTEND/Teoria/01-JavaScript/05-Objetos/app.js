//! -------- OBJETOS ------- //

// colección no ordenada de datos
// cada elemento del objeto tiene una forma --> clave : valor // key : value
// la CLAVE es una cadena de texto (string), en JS no hace falta ponerle comillas
// el VALOR puede ser cualquier cosa (string, number, boolean, funcion, array, ...), cualquier tipo de dato
// las parejas de datos se separan con comas
// en resumen son parejas de datos, en el que uno es la clave de acceso al otro, al valor

// Crear objetos
let unObjetoVacio = {}; // vacío

let unObjeto = {
    nombre : "Jon",
    edad : 25,
    animal : 'lobo'
};

// nombre, edad, animal, stark --> son propiedades (claves) del objeto
// Jon, 25, lobo, true --> son los valores de esas propiedades, estos pueden cambiar

console.log(unObjeto.nombre); // Jon ⭐
console.log(unObjeto['edad']); // 25

// modificamos una propiedad
unObjeto.edad = 30;
console.log(unObjeto.edad); // 30
console.log(unObjeto); // { nombre: 'Jon', edad: 30, animal: 'lobo', stark: true }


// añadir una propiedad
unObjeto.familia = 'Stark'; // tiene que tener un valor asignado
console.log(unObjeto); // { nombre: 'Jon', edad: 30, animal: 'lobo', familia: 'Stark' }

// eliminar una propiedad
delete unObjeto.animal; 
console.log(unObjeto); // { nombre: 'Jon', edad: 30, familia: 'Stark' }



//// Propiedad vs Método
/* en JS, toda clave de un objeto que como valor lleva un primitivo (string, boolean, number)
se llama PROPIEDAD. Todas las claves que como valor llevan una función se llaman MÉTODOS.
Una función dentro de un objeto es un método

Función --> función suelta en el código
Método ---> función dentro de un objeto */

//* Crear un método --> crear una función en un objeto

let empresa = {
    nombre : 'Neoland', // propiedad
    sector : 23, // propiedad
    localizacion : 'Madrid', // propiedad
    // método
    pausaCafe : function () {
        console.log(`Es la hora del café 😀`);
    }
}

console.log(empresa.localizacion); // Madrid
console.log(empresa.pausaCafe); // [Function: pausaCafe] --> CUIDADO, necesitamos los () de función
console.log(empresa.pausaCafe()); // Es la hora del café 😀



//* Métodos y bucles con objetos

//// bucle for ... in
// recorre todas las propiedades del objeto y realiza una instrucción que le digamos
// necesita dos parámetros --> variable, objeto
// La variable da el nombre a cada propiedad --> key
// El objeto se refiere al objeto que queramos usar --> empresa
// Sintaxis del for ... in --> for (variable in objeto){instrucción}

for (let key in empresa) {
    // instrucción
    console.log("La clave " + key + ' tiene el valor: ' +  empresa[key]);
}
// Resultado:
    /* 
    La clave nombre tiene el valor: Neoland
    La clave sector tiene el valor: IT
    La clave localizacion tiene el valor: Madrid
    La clave pausaCafe tiene el valor: function () {console.log(`Es la hora del café 😀`);}
    */

//// método Object.keys(objeto)
// nos devuelve un array con todas las claves del objeto en forma de string

let clavesUno = Object.keys(empresa);
console.log(clavesUno); // [ 'nombre', 'sector', 'localizacion', 'pausaCafe' ]

//// método Object.value(objeto)
// nos devuelve un array con todos los valores del objeto en forma de su propio tipo de dato

let valoresUno = Object.values(empresa) 
console.log(valoresUno); // [ 'Neoland', 'IT', 'Madrid', [Function: pausaCafe] ]

//// método Object.entries(objeto)
// crea un array como una colección pareja clave : valor
// crea un array global y dentro otros arrays por cada pareja clave : valor que haya en el objeto
// devuelve un array de arrays

let entries = Object.entries(empresa);
console.log(entries);
/* 
    [
        [ 'nombre', 'Neoland' ],
        [ 'sector', 23 ],
        [ 'localizacion', 'Madrid' ],
        [ 'pausaCafe', [Function: pausaCafe] ]
    ] 
*/

//// método Object.fromEntries(array)
// crea un objeto a partir de un array

let arrayEmpresa = [
    ['nombre', 'Zara'], // 0
    ['online', true], // 1
    ['empleados', 23234234] // 2
]

let objetoEmpresa = Object.fromEntries(arrayEmpresa);
console.log(objetoEmpresa); // { nombre: 'Zara', online: true, empleados: 23234234 }




//? ---- COMPARAR OBJETOS ---- //
// los objetos son datos de tipo estructural, tienen una estructura dentro
// dos objetos nunca son iguales, incluso aunque tengan las mismas propiedades

//* Tenemos dos variables, dos objetos distintos con las mismas propiedades y valor

let peces = { nombre : 'banco'};
let dinero = { nombre : 'banco'};

console.log(peces == dinero); // false
console.log(peces === dinero); // false

//* Dos variables, un solo objeto

let peces2 = { nombre : 'banco'}; // { nombre: 'banco' }
let dinero2 = peces2; // { nombre: 'banco' } --> creamos dinero2 a partir del contenido de peces2

// dinero2 y peces2 apuntan al mimso objeto

console.log(peces2 == dinero2); // true
console.log(peces2 === dinero2); // true

peces2.nombre = 'mar';
console.log(peces2); // { nombre: 'mar' }
console.log(dinero2); // { nombre: 'mar' }

/* aquí no estamos creando una copia del objeto peces2, lo que hemos hecho ha sido
apuntar la variable peces2 a la variable dinero2, entonces si se modifica la principal (peces2)
se modifica a la que apunta (dinero2) por eso en las comparaciones( ==, ===) so dice true, que si son iguales
*/


//// map()