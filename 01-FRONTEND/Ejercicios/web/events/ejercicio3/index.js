// Variable para almacenar el número de clics
let count = 0;

// Seleccionamos los elementos del DOM
const clickCount = document.getElementById("clickCount");
const incrementButton = document.getElementById("incrementButton");

// Añadimos un evento de clic al botón
incrementButton.addEventListener("click", () => {
    count++; // Incrementamos el contador
    clickCount.textContent = count; // Actualizamos el texto del párrafo
});