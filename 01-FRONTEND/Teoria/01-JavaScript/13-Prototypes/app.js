//! ------------ PROPOTYPES ----------- //
// En JS la POO (Programación Orientada a Objetos) es diferente al resto de lenguajes de programación
// En JS en vez de clases (class) usamos prototipos (prototypes)
// En JS los objetos pueden tener un prototipo, que es otro objeto del cual heredan propiedades y métodos
// Los prototipos permiten la herencia en JS.

const animal = {
    nombre : 'Pluto',
    hablar() {
        console.log('Hablo porque soy un ser vivo');
    }
}
// console.log(animal); // { nombre: 'Pluto', hablar: [Function: hablar] }


//? ----------- Función constructora y prototipos ----------- //
// Se pueden crear objetos en JS usando funciones constructoras
// El prototipo de esa función constructora se puede comparte entre todos los elementos que tengan esa función

    //* Función constructora (name en mayúscula)

    function Animal(nombreParam, especieParam) {
        // propiedades
        this.nombre = nombreParam;
        this.especie = especieParam;

        // métodos
        this.hablar = function () {
            console.log(`Hablo porque soy un ${this.especie}`);
        };

        this.saludar = function () {
            console.log(`Hola me llamo ${this.nombre}`);
        }
    }

    // Usamos la función constructora Animal para crear varios animales

    const pluto = new Animal('Pluto', 'perro');
    const garfield = new Animal('Garfield', 'gato');

    console.log(pluto);
    console.log(garfield);
    
    /*
        Animal {
            nombre: 'Pluto',
            especie: 'perro',
            hablar: [Function (anonymous)],
            saludar: [Function (anonymous)]
        }
        Animal {
            nombre: 'Garfield',
            especie: 'gato',
            hablar: [Function (anonymous)],
            saludar: [Function (anonymous)]
        }
    */

    // Llamo a las funciones de cada animal

    pluto.hablar() // Hablo porque soy un perro
    garfield.saludar() // Hola me llamo Garfield


    //* Función constructora + Prototype
    // Vamos a crear un prototipo de objeto con una función constructora
    // Asignamos fuera del objeto creamos el prototipo de los métodos

    // Función constructora donde solo asignamos las propiedades
    function Pais(nombreParam, continenteParam) {
        this.nombre = nombreParam;
        this.continente = continenteParam;
    }

    // Métodos agregados al prototipo de la función constructora
    Pais.prototype.idioma = function () {
        console.log(`Este país es ${this.nombre} y tiene su propio idioma`);
    }

    // ---> No duplicamos internamente en cada Pais el método idioma, si no que lo prototipamos
    const francia = new Pais('Francia', 'Europa');
    const eeuu = new Pais('EEUU', 'América');

    console.log(francia); // Pais { nombre: 'Francia', continente: 'Europa' }
    console.log(eeuu); // Pais { nombre: 'EEUU', continente: 'América' }
    
    francia.idioma() // Este país es Francia y tiene su propio idioma
    eeuu.idioma() // Este país es EEUU y tiene su propio idioma


    //// mini ejercicio
    // crear una función constructora para crear personas ---> Juan, Marta, Pedro
    // necesitamos nombre y edad de las personas
    // necesitamos un método para que puedan presentarse

    