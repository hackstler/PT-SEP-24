const matrizCalificaciones = [
    [3,5,9], // Calificaciones estudiantes número 1
    [2,3,4], // Calificaciones estudiantes número 2
    [9,8,9] // Calificaciones estudiantes número 3
]


for (let i = 0; i < matrizCalificaciones.length; i++){

    for(let j = 0; j < matrizCalificaciones[i].length; j++){
        console.log(`Estudiante ${i+1} con la asignatura ${j+1} y la nota ${matrizCalificaciones[i][j]}`) // matriz/primerArray/primerElementoDelArray
    }


}
