// Definimos un objeto que representa nuestras "páginas" con su contenido
const pages = {
  // Página principal "Inicio"
  home: {
    title: "Bienvenido a nuestra SPA", // Título de la página "Inicio"
    content: "Esta es la página principal de nuestra aplicación.", // Contenido de la página "Inicio"
  },
  // Página "Acerca de"
  about: {
    title: "Acerca de nosotros", // Título de la página "Acerca de"
    content: "Somos una pequeña aplicación SPA de ejemplo.", // Contenido de la página "Acerca de"
  },
};

// Función que se encarga de cambiar el contenido de la página
function renderPage(page) {
  // Seleccionamos el contenedor de contenido
  const contentDiv = document.getElementById("content");

  // Cambiamos el contenido del contenedor con el título y el contenido de la página seleccionada
  contentDiv.innerHTML = `
          <h1>${page.title}</h1> <!-- Muestra el título de la página -->
          <p>${page.content}</p> <!-- Muestra el contenido de la página -->
        `;
}

// Llamamos a la función `renderPage` para mostrar la página de inicio al cargar la aplicación
renderPage(pages.home);

// Seleccionamos el botón de inicio y agregamos un evento para cambiar a la página "Inicio"
document.getElementById("homeButton").addEventListener("click", () => {
  renderPage(pages.home); // Llamamos a `renderPage` para mostrar la página de inicio
});

// Seleccionamos el botón "Acerca de" y agregamos un evento para cambiar a la página "Acerca de"
document.getElementById("aboutButton").addEventListener("click", () => {
  renderPage(pages.about); // Llamamos a `renderPage` para mostrar la página "Acerca de"
});
