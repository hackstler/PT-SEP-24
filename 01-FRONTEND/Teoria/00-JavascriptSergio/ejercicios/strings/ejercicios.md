Aquí tienes tres ejercicios detallados que exploran diversas operaciones con strings, basados en los ejemplos que mencionaste. Estos ejercicios ayudarán a los estudiantes a aplicar y combinar métodos de concatenación, modificación, búsqueda y extracción de strings.

---

### **Ejercicio 1: Formatear y verificar un nombre completo**

#### Enunciado:

Imagina que tienes dos variables, `firstName` y `lastName`, que contienen el nombre y apellido de una persona. Tu tarea es crear una función `formatName()` que haga lo siguiente:

1. Concatenar `firstName` y `lastName` en un solo string llamado `fullName`, usando **template literals**.
2. Convertir `fullName` a mayúsculas y guardarlo en una nueva variable `upperName`.
3. Verificar si el string `upperName` contiene la palabra "SKYWALKER".
4. Si `upperName` contiene "SKYWALKER", imprimir `"¡Es un Skywalker!"`.
5. Si no contiene "SKYWALKER", imprimir `"No es un Skywalker"`.

#### Código inicial y estructura esperada:

```javascript
function formatName(firstName, lastName) {
  // Paso 1: Crear `fullName` usando template literals
  let fullName = `${firstName} ${lastName}`;

  // Paso 2: Convertir `fullName` a mayúsculas y guardarlo en `upperName`
  let upperName = fullName.toUpperCase();

  // Paso 3: Verificar si `upperName` contiene "SKYWALKER"
  if (upperName.includes("SKYWALKER")) {
    console.log("¡Es un Skywalker!");
  } else {
    console.log("No es un Skywalker");
  }
}

// Prueba con diferentes nombres
formatName("Luke", "Skywalker"); // Debería imprimir "¡Es un Skywalker!"
formatName("Anakin", "Vader"); // Debería imprimir "No es un Skywalker"
```

---

### **Ejercicio 2: Modificar y limpiar una frase de bienvenida**

#### Enunciado:

Tienes un string `welcomeMessage` que contiene una frase de bienvenida con espacios al principio y al final. También contiene la palabra "Force" en minúsculas y deseas estandarizarla. Crea una función `cleanMessage()` que haga lo siguiente:

1. Eliminar los espacios al principio y al final del string usando `.trim()`.
2. Reemplazar todas las apariciones de la palabra "Force" por "Force" en mayúscula (usando `.replaceAll()`).
3. Convertir la primera letra de cada palabra a mayúscula y el resto a minúsculas.
4. Imprimir el mensaje limpio y formateado.

#### Código inicial y estructura esperada:

```javascript
function cleanMessage(welcomeMessage) {
  // Paso 1: Eliminar espacios al inicio y al final del string
  let cleanedMessage = welcomeMessage.trim();

  // Paso 2: Reemplazar "force" por "Force" en todas las apariciones
  cleanedMessage = cleanedMessage.replaceAll("force", "Force");

  // Paso 3: Capitalizar la primera letra de cada palabra
  cleanedMessage = cleanedMessage
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  console.log(cleanedMessage);
}

// Prueba con diferentes mensajes
cleanMessage("   May the force be with you   "); // "May The Force Be With You"
cleanMessage("the force is strong with this one"); // "The Force Is Strong With This One"
```

---

### **Ejercicio 3: Extraer y reestructurar datos de una lista de personajes**

#### Enunciado:

Tienes una lista de nombres de personajes en formato CSV, guardada en la variable `charactersCSV`. Tu tarea es crear una función `processCharacters()` que:

1. Divida el string `charactersCSV` en un array de nombres, usando `.split(",")`.
2. Verifique si el array contiene el nombre "Yoda".
3. Si el nombre "Yoda" está en la lista, reemplázalo con "Master Yoda" en el array.
4. Vuelva a unir el array en un string separado por guiones ("-") usando `.join("-")`.
5. Imprima el resultado final.

#### Código inicial y estructura esperada:

```javascript
function processCharacters(charactersCSV) {
  // Paso 1: Dividir el string en un array
  let charactersArray = charactersCSV.split(",");

  // Paso 2: Verificar si contiene "Yoda" y reemplazarlo
  let yodaIndex = charactersArray.indexOf("Yoda");
  if (yodaIndex !== -1) {
    charactersArray[yodaIndex] = "Master Yoda";
  }

  // Paso 3: Unir el array en un string separado por guiones
  let formattedCharacters = charactersArray.join(" - ");

  console.log(formattedCharacters);
}

// Prueba con diferentes listas de personajes
processCharacters("Luke,Leia,Han,Yoda"); // "Luke - Leia - Han - Master Yoda"
processCharacters("Chewbacca,C3PO,R2D2,Yoda"); // "Chewbacca - C3PO - R2D2 - Master Yoda"
```

---

Estos ejercicios ayudan a aplicar y entender las operaciones de concatenación, modificación y búsqueda en strings, permitiendo que los estudiantes practiquen el uso de métodos como `.split()`, `.join()`, `.replaceAll()`, `.includes()` y `.toUpperCase()` de manera integral. ¡Espero que estos ejercicios sean útiles!
