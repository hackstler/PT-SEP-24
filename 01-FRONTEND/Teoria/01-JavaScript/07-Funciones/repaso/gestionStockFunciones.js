const inventario = [
    { nombre: "Camisa", categoria: "Ropa", cantidad: 10, precio: 20 },
    { nombre: "Pantalón", categoria: "Ropa", cantidad: 5, precio: 30 },
    { nombre: "Zapatillas", categoria: "Calzado", cantidad: 8, precio: 50 },
    { nombre: "Sombrero", categoria: "Accesorios", cantidad: 15, precio: 10 }
  ];


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

function actualizarStock(nombre, cantidadCambio) {
    // Busca en 'inventario' el producto cuyo nombre coincida (sin distinguir mayúsculas)
    let producto = inventario.find(item => item.nombre.toLowerCase() === nombre.toLowerCase());
    
    // Verifica si el producto fue encontrado
    if (producto) {
      // Si lo encontró, ajusta la cantidad del producto sumando el 'cantidadCambio' proporcionado
      producto.cantidad += cantidadCambio;
      // Muestra un mensaje en la consola con el nuevo stock del producto
      console.log(`Stock de "${nombre}" actualizado a ${producto.cantidad}.`);
    } else {
      // Si no encontró el producto, muestra un mensaje indicando que no se encontró
      console.log(`Producto "${nombre}" no encontrado.`);
    }
  }