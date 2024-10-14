const inventario = [
    { nombre: "Camisa", categoria: "Ropa", cantidad: 10, precio: 20 },
    { nombre: "Pantalón", categoria: "Ropa", cantidad: 5, precio: 30 },
    { nombre: "Zapatillas", categoria: "Calzado", cantidad: 8, precio: 50 },
    { nombre: "Sombrero", categoria: "Accesorios", cantidad: 15, precio: 10 }
  ];


  const store = []


// Función 1: Añadir un Producto

function agregarProducto(nombre, categoria, cantidad, precio) {
    const newProduct = {nombre, categoria, cantidad, precio}
    inventario.push(newProduct)
    // inventario.push({nombre, categoria, cantidad, precio})
    console.log(`Se ha añadido el producto ${nombre}`)
}



// Función 2: Buscar un Producto
// Como busco ?
// que busco ?
// Quiero reccorrer el array para ver las propiedades de mi producto
// Quiero buscar por nombre 

function buscarProducto(label, value) {
    const resultados = inventario.filter((producto)=> producto[label.toLowerCase()].toLowerCase() === value.toLowerCase())
    return resultados
}

console.log(buscarProducto('nomBre', 'cAmisa'))


// Función 3: Actualizar Stock