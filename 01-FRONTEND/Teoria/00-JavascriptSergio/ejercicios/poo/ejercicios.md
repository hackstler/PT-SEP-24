### **Ejercicio 1: Clase `Vehiculo` (Nivel Básico)**

**Objetivo:** Practicar la creación de clases, métodos y el uso de `this`.

**Instrucciones:**

1. Crea una clase llamada `Vehiculo`.
2. El constructor debe recibir dos propiedades: `marca` y `modelo`.
3. Agrega un método `detalles()` que muestre en la consola la marca y el modelo del vehículo (ejemplo: "Marca: Toyota, Modelo: Corolla").
4. Crea dos instancias de la clase `Vehiculo` y llama al método `detalles()` para cada una.

**Código de ejemplo:**

```javascript
class Vehiculo {
  // Tu código aquí
}

// Ejemplo de uso
const vehiculo1 = new Vehiculo("Toyota", "Corolla");
const vehiculo2 = new Vehiculo("Honda", "Civic");

vehiculo1.detalles(); // Marca: Toyota, Modelo: Corolla
vehiculo2.detalles(); // Marca: Honda, Modelo: Civic
```

---

### **Ejercicio 2: Clase `Usuario` con Métodos para el DOM (Nivel Intermedio)**

**Objetivo:** Practicar la manipulación del DOM usando clases.

**Instrucciones:**

1. Crea una clase `Usuario`.
2. El constructor debe recibir `nombre`, `edad` y `email`.
3. Agrega un método `mostrarInfo()` que cree un elemento `<div>` en el DOM. Este div debe mostrar el nombre, la edad y el email del usuario.
4. Crea una instancia de `Usuario` y llama al método `mostrarInfo()` para añadir la información del usuario al DOM.

**Código de ejemplo:**

```javascript
// Archivo HTML básico
/*
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejercicio Usuario</title>
</head>
<body>
  <h1>Usuarios</h1>
  <script src="script.js"></script>
</body>
</html>
*/

// Código JavaScript
class Usuario {
  // Tu código aquí
}

// Ejemplo de uso
const usuario1 = new Usuario("Ana", 25, "ana@example.com");
usuario1.mostrarInfo(); // Agrega la información al DOM
```

---

### **Ejercicio 3: Clase `Producto` con Métodos de Comparación y DOM (Nivel Avanzado)**

**Objetivo:** Practicar el uso de destructuring, métodos en el prototype y manipulación avanzada del DOM.

**Instrucciones:**

1. Crea una clase `Producto`.
2. El constructor debe recibir `nombre`, `precio` y `categoria`.
3. Agrega un método `mostrarProducto()` que cree un elemento `<div>` en el DOM para mostrar el nombre, el precio y la categoría del producto.
4. Agrega un método `compararPrecio(otroProducto)` que compare el precio de dos instancias de `Producto`:
   - Si el producto actual es más caro, muestra un mensaje en la consola: "El producto [nombre] es más caro que [nombre de otroProducto]".
   - Si es más barato, muestra un mensaje indicando que es más barato.
5. Crea dos instancias de `Producto`, muéstralas en el DOM y compara sus precios.

**Código de ejemplo:**

```javascript
// Archivo HTML básico
/*
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejercicio Producto</title>
</head>
<body>
  <h1>Productos</h1>
  <script src="script.js"></script>
</body>
</html>
*/

// Código JavaScript


---

### Resumen de los Ejercicios

1. **Ejercicio 1**: Creación de una clase y método simple, uso básico de `this`.
2. **Ejercicio 2**: Manipulación del DOM usando métodos de clases para representar información de usuarios.
3. **Ejercicio 3**: Uso avanzado de clases con destructuring, métodos de comparación, y generación de elementos en el DOM.
```
