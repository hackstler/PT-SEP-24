// Datos de ejemplo para las tarjetas, cada usuario tiene un nombre y una URL para su imagen
const usuarios = [
    { nombre: "Ditto", foto: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" },
    { nombre: "Charmander", foto: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" },
    { nombre: "Bulbasaur", foto: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" }
];

// Seleccionamos el contenedor donde se van a añadir las tarjetas dentro del DOM (HTML)
const contenedorTarjetas = document.getElementById('contenedor-tarjetas');

// Función que crea una tarjeta de perfil para un usuario
function crearTarjetaPerfil(nombre, foto) {
    // Creamos el contenedor principal de la tarjeta
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta'); // Añadimos una clase CSS 'tarjeta' para estilos

    // Creamos la imagen del perfil
    const img = document.createElement('img'); // Creamos una etiqueta img
    img.src = foto; // Asignamos la URL de la imagen proporcionada al src de la etiqueta img
    tarjeta.appendChild(img); // Añadimos la imagen dentro de la tarjeta

    // Creamos un elemento para mostrar el nombre del usuario
    const nombreElemento = document.createElement('h3'); // Creamos un elemento h3
    nombreElemento.textContent = nombre; // Establecemos el nombre proporcionado como contenido de texto del h3
    tarjeta.appendChild(nombreElemento); // Añadimos el nombre dentro de la tarjeta

    // Creamos un botón que permitirá cambiar el color de la tarjeta
    const boton = document.createElement('button'); // Creamos un botón
    boton.textContent = 'Cambiar Color'; // Establecemos el texto del botón
    boton.classList.add('cambiar-color-btn'); // Añadimos una clase CSS 'cambiar-color-btn' al botón para estilos
    // Definimos una función que se ejecutará al hacer clic en el botón para cambiar el color de la tarjeta
    boton.onclick = function() {
        tarjeta.style.backgroundColor = generarColorAleatorio(); // Cambiamos el color de fondo de la tarjeta
    };
    tarjeta.appendChild(boton); // Añadimos el botón a la tarjeta

    // Finalmente, añadimos la tarjeta completa al contenedor principal en el DOM
    contenedorTarjetas.appendChild(tarjeta);
}

// Función que genera un color hexadecimal aleatorio
function generarColorAleatorio() {
    const letras = '0123456789ABCDEF'; // Lista de caracteres hexadecimales
    let color = '#'; // Iniciamos la cadena con '#'
    // Generamos 6 caracteres aleatorios para formar un color hexadecimal
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)]; // Escogemos un carácter aleatorio de 'letras'
    }
    return color; // Retornamos el color generado
}

// Recorremos la lista de usuarios y para cada uno creamos una tarjeta de perfil
usuarios.forEach(usuario => {
    crearTarjetaPerfil(usuario.nombre, usuario.foto); // Llamamos a la función para crear la tarjeta de cada usuario
});