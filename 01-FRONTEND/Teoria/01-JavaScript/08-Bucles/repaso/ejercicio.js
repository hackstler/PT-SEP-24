// Matriz de calificaciones
let calificaciones = [
    [70, 80, 90],
    [88, 76, 95],
    [60, 85, 82]
];

// Array para almacenar la suma de calificaciones por estudiante
let sumaPorEstudiante = [];

// Bucle para recorrer cada fila (cada estudiante)
for (let i = 0; i < calificaciones.length; i++) {
    // Variable para almacenar la suma de la fila actual
    let suma = 0;

    // Bucle para recorrer cada calificación en la fila actual
    for (let j = 0; j < calificaciones[i].length; j++) {
        // Sumar la calificación actual a la variable 'suma'
        suma += calificaciones[i][j];
    }

    // Añadir la suma total de la fila al array 'sumaPorEstudiante'
    sumaPorEstudiante.push(suma);
}

// Imprimir la suma de calificaciones de cada estudiante
console.log("Sumas por estudiante:", sumaPorEstudiante);