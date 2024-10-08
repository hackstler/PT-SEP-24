

function accionDePersona (callback){
    const nombre = 'Sergio'
    callback(nombre)
}

function saludar(nombre) {
    console.log(`Hola soy ${nombre}`) 
}

accionDePersona(saludar)