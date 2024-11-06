Ejercicio 1: Iniciales de nombres completos

Objetivo: Obtener las iniciales de cada nombre completo.
Proceso: La función auxiliar obtenerIniciales divide el nombre completo en palabras y toma la primera letra de cada palabra. La función principal obtenerInicialesLista aplica esta función a cada nombre en la lista.

Ejercicio 2: Contar vocales en cada nombre

Objetivo: Contar las vocales en cada nombre y devolver un resumen.
Proceso: La función auxiliar contarVocales recorre cada letra del nombre y suma al contador si es una vocal. La función principal contarVocalesEnNombres genera el resumen de nombre y cantidad de vocales usando la función auxiliar.

```javascript
// **Datos JSON de ejemplo**
const usuariosData = {
  usuarios: [
    { nombre: "Ana Pérez", edad: "25", ciudad: "Madrid" },
    { nombre: "Carlos García", edad: "32", ciudad: "Barcelona" },
    { nombre: "Luisa Fernández", edad: "28", ciudad: "Sevilla" },
    { nombre: "José López", edad: "45", ciudad: "Valencia" },
    { nombre: "Marta Sánchez", edad: "31", ciudad: "Bilbao" },
  ],
};
```
