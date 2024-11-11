class Producto {
  // Constructor que recibe nombre, precio e imagen del producto
  constructor(nombre, precio, imagen) {
    this.nombre = nombre; // Propiedad 'nombre'
    this.precio = precio; // Propiedad 'precio'
    this.imagen = imagen; // Propiedad 'imagen'
  }

  // Método para mostrar el producto en una tarjeta en el DOM
  mostrarProducto() {
    const { nombre, precio, imagen } = this; // Usamos destructuring para extraer propiedades de 'this'

    // Creamos el contenedor de la tarjeta
    const tarjeta = document.createElement("div");
    tarjeta.style.border = "1px solid #ccc";
    tarjeta.style.padding = "16px";
    tarjeta.style.margin = "16px";
    tarjeta.style.textAlign = "center";
    tarjeta.style.width = "200px";

    // Imagen del producto
    const img = document.createElement("img");
    img.src = imagen;
    img.style.width = "100%";

    // Título del producto
    const titulo = document.createElement("h2");
    titulo.textContent = nombre;

    // Precio del producto
    const precioLabel = document.createElement("p");
    precioLabel.textContent = `Precio: $${precio}`;

    // Añadimos los elementos a la tarjeta
    tarjeta.appendChild(img);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(precioLabel);

    // Añadimos la tarjeta al cuerpo del documento
    document.body.appendChild(tarjeta);
  }
}

// Creamos una instancia de Producto y la mostramos en el DOM
const producto1 = new Producto(
  "Zapatos",
  50,
  "https://via.placeholder.com/150"
);
producto1.mostrarProducto(); // Llama al método para crear y mostrar la tarjeta del producto
