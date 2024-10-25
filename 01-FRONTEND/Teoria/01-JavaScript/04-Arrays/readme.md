Crear tus propios métodos de arrays es una excelente forma de entender a fondo cómo funcionan. A continuación, te sugiero una serie de ejercicios progresivos para que desarrolles tus versiones personalizadas de métodos comunes de arrays en JavaScript, acompañados de pistas y consejos.

### Ejercicio 1: Implementar `.forEach()`

**Descripción**: Escribe tu propio método `.myForEach(callback)` que recorra cada elemento de un array y ejecute una función (callback) sobre él.

**Pista**:

- Usa un bucle `for` para iterar sobre cada elemento.
- La función `callback` recibe tres argumentos: el elemento actual, el índice y el array completo.

**Ejemplo**:

```javascript
Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

// Prueba
[1, 2, 3].myForEach((elemento, indice) =>
  console.log(`Elemento: ${elemento}, Índice: ${indice}`)
);
```

### Ejercicio 2: Implementar `.map()`

**Descripción**: Crea un método `.myMap(callback)` que recorra el array, aplique la función `callback` a cada elemento, y retorne un nuevo array con los resultados.

**Pista**:

- Necesitarás crear un array vacío al inicio.
- Usa un bucle `for` y `callback` para transformar cada elemento.
- Al final, devuelve el nuevo array.

**Ejemplo**:

```javascript
Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

// Prueba
const duplicado = [1, 2, 3].myMap((elemento) => elemento * 2);
console.log(duplicado); // [2, 4, 6]
```

### Ejercicio 3: Implementar `.filter()`

**Descripción**: Escribe tu propio `.myFilter(callback)` para crear un nuevo array que contenga solo los elementos que pasan la condición definida en `callback`.

**Pista**:

- Crea un array vacío para almacenar los elementos que cumplen la condición.
- Si `callback` devuelve `true` para un elemento, agrégalo al array resultante.

**Ejemplo**:

```javascript
Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

// Prueba
const mayoresADos = [1, 2, 3, 4].myFilter((num) => num > 2);
console.log(mayoresADos); // [3, 4]
```

### Ejercicio 4: Implementar `.reduce()`

**Descripción**: Implementa un método `.myReduce(callback, initialValue)` que recorra el array y acumule un valor, comenzando con `initialValue`.

**Pista**:

- Si `initialValue` no se proporciona, usa el primer elemento del array como valor inicial.
- Usa un acumulador (`accumulator`) que se actualiza en cada iteración.
- La función `callback` recibe cuatro argumentos: el acumulador, el valor actual, el índice y el array completo.

**Ejemplo**:

```javascript
Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

// Prueba
const suma = [1, 2, 3].myReduce((acumulador, num) => acumulador + num, 0);
console.log(suma); // 6
```

### Ejercicio 5: Implementar `.find()`

**Descripción**: Crea `.myFind(callback)` para buscar el primer elemento en el array que cumpla con la condición en `callback` y devolverlo.

**Pista**:

- Usa un bucle `for` y verifica cada elemento con `callback`.
- Si `callback` devuelve `true`, regresa ese elemento inmediatamente.
- Si termina el bucle sin encontrar un elemento, devuelve `undefined`.

**Ejemplo**:

```javascript
Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};

// Prueba
const encontrado = [1, 2, 3, 4].myFind((num) => num > 2);
console.log(encontrado); // 3
```

### Ejercicio 6: Implementar `.some()`

**Descripción**: Implementa `.mySome(callback)` para verificar si al menos un elemento en el array cumple con `callback`.

**Pista**:

- Recorre el array y usa `callback` para evaluar cada elemento.
- Si `callback` devuelve `true` para algún elemento, retorna `true` inmediatamente.
- Si terminas de recorrer el array sin encontrar un elemento que cumpla la condición, devuelve `false`.

**Ejemplo**:

```javascript
Array.prototype.mySome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

// Prueba
const hayMayoresADos = [1, 2, 3].mySome((num) => num > 2);
console.log(hayMayoresADos); // true
```

### Ejercicio 7: Implementar `.every()`

**Descripción**: Implementa `.myEvery(callback)` para verificar si todos los elementos en el array cumplen con `callback`.

**Pista**:

- Usa un bucle `for` y llama a `callback` para evaluar cada elemento.
- Si `callback` devuelve `false` para algún elemento, retorna `false` inmediatamente.
- Si terminas el bucle sin encontrar elementos que no cumplan la condición, retorna `true`.

**Ejemplo**:

```javascript
Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

// Prueba
const todosMayoresADos = [3, 4, 5].myEvery((num) => num > 2);
console.log(todosMayoresADos); // true
```

Estos ejercicios te ayudarán a desarrollar una comprensión sólida de cómo funcionan los métodos de los arrays.
