//! ---------- JSON ----------- //

// Es un objeto JSON y se representa con la estructura de pares "clave" : valor
    // Las claves se ponen entre comillas dobles "claves"
    // Los valores pueden ser de cualquier tipo --> number, string, boolean, object, array, ...

// Cada par clave:valor, se separa por comas , entre corchetes {} --> como un objeto
    // {"clave" : valor}, {"clave" : valor}

//? Ejemplo 1 con un dato string

    //"nombre" : "Bea"

//? Ejemplo 2 con un array

    /*
        "clave" : [
            {"clave" : valor, "clave" : valor},
            {"nombre" : "Bea", "edad" : 34},
            {"nombre" : "Jane", "edad" : 23}
        ]
    */


//* ACCEDEMOS A ESTOS DATOS CON LOS MÉTODOS TRADICIONALES DE JAVASCRIPT 

//? OTROS MÉTODOS PROPIOS DE JSON

//// JSON.stringify()
// convierte objetos de javascript a JSON

let dataJS = { 
    animal : 'perro',
    color : 'marron',
    amigos : [
        'gato',
        'caballo'
    ]
}
console.log(dataJS); // devuelve el objeto en JS

let convertirDataJS = JSON.stringify(dataJS);
console.log(convertirDataJS); // '{"animal":"perro","color":"marron","amigos":["gato","caballo"]}'
// devuelve el objeto JS convertido a JSON que se lee como un string




//// JSON.parse()
// convierte JSON a un objeto javascript

let dataJSON = '{ "nombre" : "Noelia", "hobby" : "nadar" , "numeros" : [ 0, 13 ]}';
console.log(dataJSON); // devuelve un string que es el formato de JSON

let convertirDataJSON = JSON.parse(dataJSON)
console.log(convertirDataJSON); // { nombre: 'Noelia', hobby: 'nadar', numeros: [ 0, 13 ] }
//devuelve el objeto en formato JS
