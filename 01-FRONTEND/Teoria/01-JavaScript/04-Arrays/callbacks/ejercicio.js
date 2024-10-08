// Parte 1: Crear una función que procese la edad y determine si el usuario es mayor o menor de edad
// Función que toma el nombre, la edad, y un callback
function verificarEdad(nombre, edad, callback) {
    // Imprime que se están procesando los datos del usuario
    console.log(`Procesando datos de ${nombre}...`);
    
    // Verifica si el usuario tiene 18 años o más
    if (edad >= 18) {
      // Si es mayor de edad, llama al callback pasando el nombre y "mayor de edad"
      callback(nombre, "mayor de edad");
    } else {
      // Si es menor de edad, llama al callback pasando el nombre y "menor de edad"
      callback(nombre, "menor de edad");
    }
  }
  
  // Parte 2: Definir el callback que maneja y muestra el resultado en la consola
  // Función de callback que muestra el resultado de la verificación de edad
  function mostrarResultado(nombre, resultado) {
    // Imprime en la consola si el usuario es mayor o menor de edad
    console.log(`${nombre} es ${resultado}.`);
  }
  
  // Parte 3: Utilizar la función para verificar al menos dos usuarios
  // Llamada a la función verificarEdad para "Juan" de 20 años (debería ser mayor de edad)
  verificarEdad("Juan", 20, mostrarResultado);
  
  // Llamada a la función verificarEdad para "Ana" de 16 años (debería ser menor de edad)
  verificarEdad("Ana", 16, mostrarResultado);