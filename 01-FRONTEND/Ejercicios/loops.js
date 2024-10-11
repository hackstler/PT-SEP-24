// **Iteración #2: Condicionales avanzados**

// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad ***isApproved*** a true o false en consecuencia. Una vez lo tengas compruébalo con un ***console.log***. 

// ( **Mirar abajo en pistas** ).

// Puedes usar este array para probar tu función:

const alumns = [
    { name: 'Pepe Viruela', T1: false, T2: false, T3: true },
    { name: 'Lucia Aranda', T1: true, T2: false, T3: true },
    { name: 'Juan Miranda', T1: false, T2: true, T3: true },
    { name: 'Alfredo Blanco', T1: false, T2: false, T3: false },
    { name: 'Raquel Benito', T1: true, T2: true, T3: true }
];

alumns.forEach((alumn) => {
  // Contar trimestres aprobados (donde el valor es true)
  const approvedCount = [alumn.T1, alumn.T2, alumn.T3].filter(trimestre => trimestre).length;
  
  // Añadir propiedad isApproved según el número de aprobados
  alumn.isApproved = approvedCount >= 2;
});

console.log(alumns);