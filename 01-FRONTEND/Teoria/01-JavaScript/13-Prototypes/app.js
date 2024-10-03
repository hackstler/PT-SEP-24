//! ------------ PROPOTYPES ----------- //
// En JS la POO (Programación Orientada a Objetos) es diferente al resto de lenguajes de programación ----> //!VER ACLARACIÓNAL FINAL de la página
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
    // crear una función constructora para crear personas
    // necesitamos nombre y edad de las personas
    // necesitamos un método para que puedan presentarse
    // creo 3 personas: Juan 34, Marta 16, Pedro 8

    //! función constructora con propiedades
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    //! prototipo de metodo de la funcion Persona
    Persona.prototype.saludar = function () {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }

    const juan = new Persona('Juan', 34);
    const marta = new Persona('Marta', 16);
    const pedro = new Persona('Pedro', 8);

    console.log(juan, marta, pedro);
    // Persona { nombre: 'Juan', edad: 34 } Persona { nombre: 'Marta', edad: 16 } Persona { nombre: 'Pedro', edad: 8 }

    juan.saludar() // Hola, soy Juan y tengo 34 años
    marta.saludar() // Hola, soy Marta y tengo 16 años
    pedro.saludar() // Hola, soy Pedro y tengo 8 años


    //? ----------- HERENCIAS DE PROTOTIPOS ----------- //
    // seguimos trabajando con la función constructora Persona

    //! función constructoria Estudiante que hereda las propiedades de Persona
    function Estudiante(nombre, edad, bootcamp) {
        // heredamos Persona
        Persona.call(this, nombre, edad);
        // creamos la propiedad bootcamp
        this.bootcamp = bootcamp;
    }
    console.log(Estudiante); // [Function: Estudiante]
    
    // Desestructuro dentro de Estudiante el objeto Persona para poder usar nombre y edad como Persona y Estudiante
    Estudiante.prototype = Object.create(Persona.prototype) // Persona {}

    // Aquí construyo la función completa Estudiante con el objeto y propiedades de Persona + la nueva de Estudiante
    Estudiante.prototype.constructor = Estudiante; // [Function: Estudiante] 
    
    // Además, me creo un método prototipado de Estudiante para que pueda presentarse
    Estudiante.prototype.presentar = function () {
        console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} y estudio un bootcamp de ${this.bootcamp}`);
    }

    // Creamos un Estudiante y se presenta y/o saluda
    const estudiante1 = new Estudiante('Josiel', 22, 'FullStack Dev')

    /* Cualquier 'estudiante' que creemos con la instancia new Estudiante puede usar tanto propiedades 
    como métodos de todo lo que tenga dentro ---> Persona y Estudiante*/
    estudiante1.saludar() // Hola, soy Josiel y tengo 22 años

    // Además, tiene su propio método que también puede usar, que es 'presentar'
    estudiante1.presentar() // Hola, soy Josiel, tengo 22 y estudio un bootcamp de FullStack Dev

    //* RESUMEN ESTUDIANTE Y PERSONA
    /** En resumen, Estudiante es Estudiante y Persona porque ha heredado toda la estructura
     * de objeto Persona y además tiene sus propios métodos (presentar) y propiedades (bootcamp).
    */

    //// POR QUÉ EXPLICAMOS LOS PROTOTIPOS EN JS Y NOMBRAMOS LA POO
    /* JS no es un lenguaje de programación oritentado a objetos
    Lenguajes de POO como Java, C++, Python son POO
    JS admite la POO pero ES UN LENGUAJE BASADO EN PROTOTIPOS
    */