const tienda = {
    // Define una propiedad 'inventario' que contiene un array de objetos, cada uno representando un producto con nombre, categoría, cantidad y precio
    inventario: [
      { nombre: "Camisa", categoria: "Ropa", cantidad: 10, precio: 20 },
      { nombre: "Pantalón", categoria: "Ropa", cantidad: 5, precio: 30 },
      { nombre: "Zapatillas", categoria: "Calzado", cantidad: 7, precio: 45 }
    ],
    
    // Método para agregar un nuevo producto al inventario
    agregarProducto: function(nombre, categoria, cantidad, precio) {
      // Añade un nuevo objeto producto al array 'inventario' con las propiedades proporcionadas
      this.inventario.push({ nombre, categoria, cantidad, precio });
      // Muestra un mensaje en la consola confirmando que el producto fue añadido
      console.log(`Producto "${nombre}" añadido al inventario.`);
    },
    
    // Método para actualizar el stock de un producto específico en el inventario
    actualizarStock: function(nombre, cantidadCambio) {
      // Busca en 'inventario' el producto cuyo nombre coincida (sin distinguir mayúsculas)
      let producto = this.inventario.find(item => item.nombre.toLowerCase() === nombre.toLowerCase());
      
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
    },
    
    // Método para buscar productos en el inventario por un término y tipo (nombre o categoría)
    buscarProducto: function(label, value) {
      // Filtra el inventario para encontrar productos cuyo 'tipo' de propiedad coincida con el término de búsqueda (sin distinguir mayúsculas)
      let resultados = this.inventario.filter(producto => producto[label].toLowerCase() === value.toLowerCase());
      // Devuelve el array con los productos encontrados
      return resultados;
    }
  };
  
// Ejemplo de uso del método 'agregarProducto': Añade un nuevo producto al inventario
tienda.agregarProducto("Sombrero", "Accesorios", 15, 25); 

// Ejemplo de uso del método 'actualizarStock': Resta 2 unidades al stock del producto "Camisa"
tienda.actualizarStock("Camisa", -2); 

// Ejemplo de uso del método 'buscarProducto': Busca productos de la categoría "Ropa" y muestra el resultado
console.log(tienda.buscarProducto("Ropa", "categoria")); 

// Otro ejemplo de 'buscarProducto': Busca productos cuyo nombre sea "Camisa" y muestra el resultado
console.log(tienda.buscarProducto("Camisa", "nombre")); 