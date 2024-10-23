// Seleccionamos el botón por su id
const submitButton = document.getElementById("submitButton");

// Añadimos un evento de clic al botón
submitButton.addEventListener("click", () => {
    alert("Enviado");
    submitButton.disabled = true; // Deshabilitar el botón después del clic
});