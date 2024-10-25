// Referencias al DOM
const inputText = document.getElementById('inputText');
const saveButton = document.getElementById('saveText');

// Cargar el texto guardado en localStorage (si existe) al cargar la página
window.onload = function () {
    const savedText = localStorage.getItem('userText');
    if (savedText) {
        inputText.value = savedText;  // Mostrar el texto guardado
    }
}

// Guardar el texto en localStorage cuando el usuario haga clic en el botón
saveButton.addEventListener('click', function () {
    const userText = inputText.value;
    localStorage.setItem('userText', userText);  // Guardar el texto
    alert('Texto guardado');
});
