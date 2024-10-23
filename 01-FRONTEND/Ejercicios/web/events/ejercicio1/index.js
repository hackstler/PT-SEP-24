// Seleccionamos el div por su id
const colorBox = document.getElementById("colorBox");

// Cambiamos el color de fondo a rojo al pasar el ratón
colorBox.addEventListener("mouseover", () => {
    colorBox.style.backgroundColor = "red";
});

// Volvemos al color azul cuando el ratón salga del div
colorBox.addEventListener("mouseout", () => {
    colorBox.style.backgroundColor = "blue";
});