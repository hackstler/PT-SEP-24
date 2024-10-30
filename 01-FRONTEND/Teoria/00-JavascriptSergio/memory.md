### **Estructura de memoria en JavaScript**

JavaScript gestiona la memoria en dos áreas principales:

1. **Pila de ejecución (stack)**: Aquí se almacenan los **valores de tipos primitivos** (como números, strings, booleans) y las referencias a las funciones. Esta memoria es de acceso rápido y los datos en el stack tienen un ciclo de vida corto.

2. **Montón de memoria (heap)**: Aquí se almacenan los **objetos** y **arrays**. El heap tiene memoria dinámica y los objetos aquí tienen un ciclo de vida más largo. Las variables en el stack pueden contener referencias a datos en el heap.

---

### **Ejemplo 1: Tipos primitivos en el stack**

Los **tipos primitivos** (como `number`, `string`, `boolean`, `null`, `undefined`) se almacenan en el stack. Vamos a ver un ejemplo de cómo JavaScript maneja estas variables.

```javascript
// Ejemplo de tipos primitivos
let a = 10; // Se almacena en el stack con el valor 10
let b = a; // Copiamos el valor de 'a' en 'b', ahora ambos valen 10

// Visualización
console.log(a); // 10
console.log(b); // 10

// Cambiamos el valor de 'a'
a = 20; // Solo cambia 'a', ya que 'b' es una copia independiente

console.log(a); // 20
console.log(b); // 10
```

#### **Visualización de la memoria en el stack:**

1. **Inicialización de `a`**:
   - JavaScript crea un espacio en el stack para `a` y almacena el valor `10`.
2. **Asignación de `b = a`**:
   - Como los primitivos se copian, `b` obtiene una **copia** del valor de `a`, por lo que `b` también es `10`.
3. **Cambio en `a`**:
   - Al cambiar el valor de `a` a `20`, `b` se mantiene en `10`, ya que se copió de forma independiente.

---

### **Ejemplo 2: Referencias a objetos en el heap**

Cuando trabajamos con **objetos** o **arrays**, las variables en realidad contienen una **referencia** a la ubicación del objeto en el heap. Esto significa que si cambiamos el objeto en una variable, cualquier otra variable que lo referencie también verá el cambio.

```javascript
// Ejemplo de objetos
let obj1 = { name: "Alice", age: 25 }; // 'obj1' es una referencia en el stack a un objeto en el heap
let obj2 = obj1; // 'obj2' ahora apunta al mismo objeto en el heap

// Visualización inicial
console.log(obj1); // { name: "Alice", age: 25 }
console.log(obj2); // { name: "Alice", age: 25 }

// Modificamos una propiedad a través de 'obj1'
obj1.age = 30; // Cambia la propiedad 'age' en el objeto en el heap

console.log(obj1); // { name: "Alice", age: 30 }
console.log(obj2); // { name: "Alice", age: 30 } - También cambia en 'obj2' porque apunta al mismo objeto
```

#### **Visualización de la memoria en el heap y el stack:**

1. **Inicialización de `obj1`**:
   - JavaScript crea una referencia `obj1` en el stack y reserva un espacio en el heap para `{ name: "Alice", age: 25 }`.
2. **Asignación de `obj2 = obj1`**:
   - `obj2` es una **referencia** al mismo objeto en el heap. No se crea un nuevo objeto.
3. **Modificación a través de `obj1`**:
   - Cambiar `obj1.age` modifica el objeto en el heap, afectando tanto a `obj1` como a `obj2` ya que ambos apuntan al mismo espacio en memoria.

---

### **Ejemplo 3: Arrays y referencias en el heap**

Los arrays en JavaScript son también objetos y, por lo tanto, funcionan de la misma manera en cuanto a la asignación y manipulación en memoria.

```javascript
let array1 = [1, 2, 3]; // 'array1' apunta a un array en el heap
let array2 = array1; // 'array2' es una referencia al mismo array en el heap

// Visualización inicial
console.log(array1); // [1, 2, 3]
console.log(array2); // [1, 2, 3]

// Modificamos el array a través de 'array1'
array1.push(4); // Añadimos un valor al array en el heap

console.log(array1); // [1, 2, 3, 4]
console.log(array2); // [1, 2, 3, 4] - También cambia en 'array2' porque es el mismo array
```

#### **Visualización de la memoria en el heap y el stack:**

1. **Inicialización de `array1`**:
   - JavaScript reserva un espacio en el heap para `[1, 2, 3]` y `array1` apunta a ese espacio.
2. **Asignación de `array2 = array1`**:
   - `array2` se convierte en una referencia al mismo array en el heap. Ambos apuntan a `[1, 2, 3]`.
3. **Modificación a través de `array1`**:
   - Agregar un elemento usando `array1.push()` cambia el array en el heap, por lo que `array2` también refleja el cambio.

---

### **Ejemplo 4: Paso por referencia y paso por valor en funciones**

Cuando pasamos variables a funciones, el comportamiento varía dependiendo de si el valor es primitivo o un objeto.

#### **Paso por valor (para primitivos)**

```javascript
function updateValue(x) {
  x = 50; // Solo afecta a 'x' dentro de la función
}

let number = 10;
updateValue(number);

console.log(number); // 10 - 'number' no cambia porque se pasa por valor
```

- **Visualización**: El valor de `number` no cambia fuera de la función porque, al ser un valor primitivo, se pasa una **copia** a la función.

#### **Paso por referencia (para objetos)**

```javascript
function updateObject(obj) {
  obj.name = "Updated"; // Modifica la propiedad 'name' en el objeto en el heap
}

let person = { name: "Alice" };
updateObject(person);

console.log(person.name); // "Updated" - Cambia porque se pasa por referencia
```

- **Visualización**: Aquí `person` es un objeto y se pasa por referencia. La función modifica el objeto en el heap, por lo que el cambio es visible fuera de la función.

---

### **Visualización final de memoria en JavaScript**

- **Stack**: Es rápido, de acceso directo y contiene valores primitivos y referencias a objetos en el heap.
- **Heap**: Se utiliza para almacenar objetos, arrays y cualquier tipo de dato compuesto que requiere asignación de memoria dinámica.
