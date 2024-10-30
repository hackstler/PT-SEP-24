### **¿Podemos ver la clase String en JavaScript?**

JavaScript utiliza un modelo basado en **prototipos** para heredar propiedades y métodos, en lugar de una estructura basada en clases. Sin embargo, desde ES6, JavaScript introdujo una **sintaxis de clase** que facilita trabajar con la herencia y la orientación a objetos, aunque internamente sigue siendo un modelo prototipal.

Podemos **ver el prototipo de String** y los métodos que hereda cada string de esta estructura prototipal.

#### Cómo ver el prototipo de String

Si queremos ver todos los métodos disponibles para un string, podemos inspeccionar el **prototipo de `String`** accediendo a `String.prototype`.

```javascript
// Visualizamos el prototipo de String
console.log(Object.getOwnPropertyNames(String.prototype));
```

Este código imprimirá un array con los nombres de todos los métodos disponibles para los strings, como:

```plaintext
["length", "constructor", "charAt", "charCodeAt", "concat", "includes", "endsWith",
 "indexOf", "lastIndexOf", "match", "repeat", "replace", "slice", "split", "substr",
 "substring", "toLowerCase", "toUpperCase", "trim", "trimEnd", "trimStart", ...]
```

Cada método listado en `String.prototype` es un método heredado por todos los strings en JavaScript, lo que significa que cualquier string puede usar cualquiera de estos métodos.

### **1. Los strings como objetos en JavaScript**

Aunque los strings parecen simples secuencias de caracteres, JavaScript los trata internamente como **objetos especiales**. Esto significa que, aunque un string en sí mismo es un **tipo de dato primitivo**, JavaScript automáticamente lo “envuelve” en un objeto cuando lo necesitamos manipular.

Este proceso es parte de lo que se llama **conversión automática de tipos** o **autoboxing**. En el momento en que usamos un método como `.toUpperCase()` o `.slice()`, JavaScript convierte temporalmente el string en un **objeto String**, lo que le da acceso a todos los métodos definidos en la **clase String**.

#### Ejemplo de autoboxing

```javascript
let name = "Anakin";

// Aunque "Anakin" es un string, podemos hacer esto:
console.log(name.toUpperCase()); // "ANAKIN"
```

Aquí, JavaScript convierte temporalmente `"Anakin"` en un objeto de tipo `String`, lo que permite que el método `.toUpperCase()` funcione. Cuando termina de ejecutarse, el string vuelve a su estado primitivo.

---

### **2. ¿De dónde vienen los métodos de string en JavaScript?**

JavaScript es un lenguaje basado en **prototipos**, lo que significa que casi todo en JavaScript es un objeto que tiene un “prototipo” del cual hereda propiedades y métodos.

La **clase `String`** es un objeto prototipo que define cómo funcionan los strings en JavaScript. Todos los métodos de string que usamos (como `.slice()`, `.concat()`, `.toLowerCase()`) están definidos en el **prototipo de String**. Esto significa que cualquier string que creamos hereda estos métodos del prototipo de String, por lo que automáticamente puede usar todos los métodos de esa clase.

#### Ejemplo de prototipo en acción

```javascript
let message = "Hello";

// Internamente, JavaScript hace algo como esto:
console.log(message.toUpperCase()); // "HELLO"

// Esto es posible porque 'message' hereda los métodos del prototipo de String
```

Cada vez que accedemos a un método en un string, JavaScript **busca el método en el prototipo de String** y lo aplica al valor. Este proceso es automático y le permite a cualquier string en JavaScript acceder a estos métodos sin que tengamos que definirlos nosotros mismos.

---

### **3. El prototipo de String: un “recetario” para trabajar con texto**

Podemos pensar en el prototipo de `String` como un “recetario” de métodos que nos permite realizar operaciones comunes en los strings:

- **Transformar el texto**: Métodos como `.toUpperCase()` y `.toLowerCase()` están en el prototipo de String y permiten cambiar el formato del texto sin alterar el string original.
- **Extraer partes**: Métodos como `.slice()`, `.substring()` y `.substr()` permiten extraer partes específicas del texto, usando índices para indicar dónde comenzar y terminar la extracción.
- **Buscar**: Métodos como `.indexOf()` y `.includes()` permiten verificar si una palabra o carácter está en el texto y en qué posición.
- **Manipular contenido**: Métodos como `.replace()` y `.replaceAll()` permiten modificar el texto reemplazando palabras o caracteres específicos.

#### Ejemplo de prototipo de String como “recetario”

```javascript
let quote = "The Force is strong";

// Cambiamos a mayúsculas (de la receta de .toUpperCase)
console.log(quote.toUpperCase()); // "THE FORCE IS STRONG"

// Reemplazamos "Force" por "Dark Side" (de la receta de .replace())
let newQuote = quote.replace("Force", "Dark Side");
console.log(newQuote); // "The Dark Side is strong"
```

### **4. Los strings son inmutables en JavaScript**

Es importante recordar que **los strings en JavaScript son inmutables**, lo que significa que no se pueden modificar directamente. Cada vez que usamos un método como `.toUpperCase()` o `.replace()`, en realidad estamos creando un **nuevo string** con los cambios aplicados, en lugar de modificar el string original.

Esto es diferente de lo que sucede con los objetos o arrays, que son mutables y pueden ser modificados directamente.

#### Ejemplo de inmutabilidad

```javascript
let original = "Yoda";
let changed = original.toLowerCase(); // Cambia a minúsculas, pero en una nueva variable

console.log(original); // "Yoda" - el string original no cambia
console.log(changed); // "yoda" - el resultado de la transformación
```

---

### **5. Acceso y creación de métodos en el prototipo de String**

Como desarrolladores, podemos **extender el prototipo de String** añadiendo métodos personalizados si es necesario. Esto nos permite definir nuevas funcionalidades para los strings en toda la aplicación.

#### Ejemplo de extender el prototipo de String

```javascript
// Definimos un nuevo método en el prototipo de String
String.prototype.encloseInStars = function () {
  return `*** ${this} ***`;
};

// Ahora podemos usar este método en cualquier string
let text = "May the Force be with you";
console.log(text.encloseInStars()); // "*** May the Force be with you ***"
```

> **Nota**: Aunque es posible extender el prototipo de String, es recomendable hacerlo con precaución para evitar conflictos con otros métodos o librerías.

---

### **6. Resumen visual del funcionamiento de los métodos de string en JavaScript**

1. **Autoboxing**: JavaScript convierte los strings a objetos temporales para poder usar métodos sobre ellos.
2. **Prototipo de String**: Los métodos de string están definidos en el prototipo de String, y todos los strings en JavaScript heredan de este prototipo, lo que les da acceso a los métodos de manipulación.
3. **Inmutabilidad**: Cada vez que realizamos una operación de cambio, obtenemos un nuevo string en lugar de modificar el string original.
4. **Extensibilidad**: Podemos extender el prototipo de String para añadir métodos personalizados si necesitamos funcionalidad adicional.
