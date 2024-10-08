// funcion que simula agregar un producto a un carrito

function agregarAlCarrito(producto, cantidad, costeEnvio, callback) {
    const stock = 5
    // imprimimos mensaje con los costes de envio
    console.log('Los costes de envio son: ', costeEnvio)
    if(cantidad <= stock){ // comprobamos el stock
        callback(true , producto) // si hay suficiente llamamos al cb con el parametro a true
    } else {
        callback(false, producto) // su no hay suficiente llamamos al cb con el parametro a false
    }
    
}


function confirmar(producto) { // definimos la funcion CB que confirma la compra

    console.log(`Confirmamos que el producto ${producto} se añadio al carrito`)
    
}

function mostrarError(producto) { // definimos el callback que muestra el error

    console.log(`No hay stock disponible para el producto: ${producto}`)
    
}

// ejecumtamos la funcion  agregar carrito con los parametros necesarios
agregarAlCarrito("zapatos", 6, '3.99', function (disponible, producto) {
    if(disponible) {
        confirmar(producto)
    } else {
        mostrarError(producto)
    }
    
})