### **Operaciones comunes con strings en JavaScript**

#### **1. Concatenación de Strings**

La **concatenación** consiste en unir dos o más strings. En JavaScript, tenemos varias formas de hacerlo:

1. Usando el operador `+`.
2. Usando el método `.concat()`.
3. Usando **template literals** (literales de plantilla) con backticks (\` ` \`).

```javascript
// Concatenación con el operador +
let firstName = "Luke";
let lastName = "Skywalker";
let fullName = firstName + " " + lastName; // "Luke Skywalker"

// Concatenación con .concat()
fullName = firstName.concat(" ", lastName); // "Luke Skywalker"

// Concatenación con template literals
fullName = `${firstName} ${lastName}`; // "Luke Skywalker"
```

### **2. Modificar contenido en Strings**

JavaScript trata los strings como **inmutables**, lo que significa que no puedes modificar un string en su lugar. Sin embargo, puedes crear una **nueva versión** del string con las modificaciones deseadas.

#### Reemplazar partes de un string con `.replace()` y `.replaceAll()`

```javascript
let quote = "The force will be with you, always.";

// Reemplazamos "force" por "Force"
let newQuote = quote.replace("force", "Force"); // "The Force will be with you, always."

// Usamos .replaceAll() para múltiples coincidencias
quote = "Use the force, feel the force.";
newQuote = quote.replaceAll("force", "Force"); // "Use the Force, feel the Force."
```

#### Cambiar mayúsculas y minúsculas con `.toUpperCase()` y `.toLowerCase()`

```javascript
let greeting = "hello world";

// Cambiar a mayúsculas
let upperGreeting = greeting.toUpperCase(); // "HELLO WORLD"

// Cambiar a minúsculas
let lowerGreeting = upperGreeting.toLowerCase(); // "hello world"
```

### **3. Extraer partes de un string**

Para extraer partes de un string, tenemos métodos como `.slice()`, `.substring()` y `.substr()`.

#### Extraer con `.slice()`

```javascript
let phrase = "A long time ago in a galaxy far, far away";

// Extraer desde el índice 2 hasta el 6 (sin incluir el 6)
let part = phrase.slice(2, 6); // "long"

// Extraer desde el índice -9 (contando desde el final) hasta el final
let endPart = phrase.slice(-9); // "far away"
```

#### Extraer con `.substring()`

```javascript
// Extraer desde el índice 0 hasta el 4
let partial = phrase.substring(0, 4); // "A lo"
```

### **4. Encontrar partes de un string**

Podemos buscar en un string utilizando métodos como `.indexOf()`, `.lastIndexOf()`, y `.includes()`.

```javascript
let sentence = "The quick brown fox jumps over the lazy dog";

// Encontrar la primera aparición de "fox"
let index = sentence.indexOf("fox"); // 16

// Verificar si la palabra "dog" está en la oración
let containsDog = sentence.includes("dog"); // true
```

### **5. Dividir y unir strings**

Para dividir un string en un array, usamos `.split()`, y para unir un array en un string, usamos `.join()`.

```javascript
let csvData = "Luke,Leia,Han,Chewbacca";

// Dividir en un array
let characters = csvData.split(","); // ["Luke", "Leia", "Han", "Chewbacca"]

// Unir de nuevo en un string, con un espacio entre nombres
let joined = characters.join(" "); // "Luke Leia Han Chewbacca"
```

### **Ejemplos prácticos de operaciones de string**

Veamos ejemplos combinados para trabajar con strings de forma práctica y visual.

---

### **Ejemplo 1: Formatear nombres completos**

Queremos crear un formato de nombre completo a partir de variables individuales de nombre y apellido.

```javascript
let firstName = "Darth";
let lastName = "Vader";

// Usamos template literals para crear el nombre completo
let fullName = `${firstName} ${lastName}`;
console.log(fullName); // "Darth Vader"

// Convertimos el nombre completo a mayúsculas
let upperName = fullName.toUpperCase();
console.log(upperName); // "DARTH VADER"
```

---

### **Ejemplo 2: Reemplazar palabras en una frase**

Imagina que tenemos una frase sobre Star Wars y queremos reemplazar la palabra "Jedi" por "Sith".

```javascript
let text = "A Jedi's strength flows from the Force.";

// Reemplazamos "Jedi" por "Sith"
let newText = text.replace("Jedi", "Sith");
console.log(newText); // "A Sith's strength flows from the Force."
```

---

### **Ejemplo 3: Verificar y extraer información de un string**

Supongamos que queremos verificar si una palabra específica está en un string y extraer una parte de él.

```javascript
let intro = "A long time ago in a galaxy far, far away.";

// Verificar si contiene "galaxy"
let hasGalaxy = intro.includes("galaxy");
console.log(hasGalaxy); // true

// Extraer la frase "a galaxy far"
let extracted = intro.slice(21, 33);
console.log(extracted); // "a galaxy far"
```

---

### **Ejemplo 4: Convertir datos CSV a un array y luego a un string**

Supongamos que tenemos datos de personajes en formato CSV y queremos convertirlos en un array y luego unirlos en un string con guiones.

```javascript
let csv = "Yoda,Luke,Leia,Han";

// Convertimos a array
let namesArray = csv.split(",");
console.log(namesArray); // ["Yoda", "Luke", "Leia", "Han"]

// Convertimos a un string unido por guiones
let hyphenatedNames = namesArray.join(" - ");
console.log(hyphenatedNames); // "Yoda - Luke - Leia - Han"
```

---

### **Ejemplo 5: Limpieza de texto y eliminación de espacios**

Al trabajar con entradas de usuarios, es común que haya espacios adicionales. Veamos cómo eliminarlos.

```javascript
let rawInput = "   May the Force be with you   ";

// Eliminar espacios al inicio y al final
let cleanedInput = rawInput.trim();
console.log(cleanedInput); // "May the Force be with you"
```

---

### **Ejemplo 6: Construcción de iniciales a partir de un nombre completo**

Dado un nombre completo, construimos las iniciales. Este ejemplo combina `split()`, `map()`, y `join()` para crear las iniciales.

```javascript
let fullName = "Leia Organa Skywalker";

// Dividimos en palabras
let words = fullName.split(" ");

// Tomamos la primera letra de cada palabra
let initials = words.map((word) => word[0]).join("");
console.log(initials); // "LOS"
```

---

### **Ejemplo 7: Reemplazar todas las ocurrencias de una palabra**

Si necesitamos reemplazar todas las ocurrencias de una palabra, podemos usar `replaceAll()` o combinar `split()` y `join()`.

```javascript
let phrase = "Use the Force, feel the Force, trust the Force";

// Reemplazar todas las ocurrencias de "Force" con "Dark Side"
let modifiedPhrase = phrase.replaceAll("Force", "Dark Side");
console.log(modifiedPhrase); // "Use the Dark Side, feel the Dark Side, trust the Dark Side"
```

---

### **Resumen visual**

- **Concatenar strings**: Usa `+`, `.concat()`, o template literals.
- **Modificar**: Cambia mayúsculas/minúsculas, usa `.replace()` para cambiar palabras.
- **Extraer**: Usa `.slice()`, `.substring()` para obtener partes del string.
- **Buscar**: Usa `.indexOf()`, `.includes()` para encontrar palabras o caracteres.
- **Dividir y unir**: Convierte strings en arrays y viceversa con `.split()` y `.join()`.
- **Eliminar espacios**: Usa `.trim()` para limpiar espacios no deseados.
