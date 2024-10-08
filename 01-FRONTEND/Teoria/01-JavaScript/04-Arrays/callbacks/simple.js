

function accionDePersona (callback){
    const nombre = 'Sergio'
    callback(nombre)
}

function saludar(nombre) {
    console.log(`Hola soy ${nombre}`) 
}

function despedirse() {
    console.log(`Adios`) 
}

accionDePersona(saludar)
accionDePersona(despedirse)