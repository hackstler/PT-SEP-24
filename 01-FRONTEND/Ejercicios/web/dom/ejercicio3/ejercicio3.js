// Función que añade un nuevo elemento a la lista
function agregarElemento() {
    // Creamos un nuevo elemento de lista <li>
    const nuevoElemento = document.createElement('li');

    // Asignamos texto al nuevo elemento
    nuevoElemento.textContent = 'Nuevo elemento de lista';

    // Añadimos el nuevo elemento a la lista con id "lista"
    document.getElementById('lista').appendChild(nuevoElemento);
}

// Función que elimina el último elemento de la lista
function eliminarElemento() {
    // Seleccionamos la lista con id "lista"
    const lista = document.getElementById('lista');

    // Verificamos si la lista tiene al menos un elemento
    if (lista.hasChildNodes()) {
        // Eliminamos el último elemento de la lista
        lista.removeChild(lista.lastChild);
    } else {
        // Mostramos una alerta si no hay elementos para eliminar
        alert('No hay más elementos para eliminar');
    }
}