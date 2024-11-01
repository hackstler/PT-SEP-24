### Ejemplo de JSON Complejo (Datos de Star Wars)

```javascript
const starWarsInfo = {
  movie: {
    title: "A New Hope",
    release_year: 1977,
    director: "George Lucas",
    characters: {
      main: {
        name: "Luke Skywalker",
        homeworld: "Tatooine",
        species: "Human",
        allies: ["Han Solo", "Leia Organa", "Obi-Wan Kenobi"],
      },
      villain: {
        name: "Darth Vader",
        homeworld: "Tatooine",
        species: "Human",
        allies: ["Emperor Palpatine"],
      },
    },
  },
};
```

---

### **Ejercicio 1: Modificar el planeta natal si el personaje es "Luke Skywalker"**

#### Enunciado

Queremos cambiar el planeta natal de "Luke Skywalker" a "Dagobah", pero solo si su `homeworld` actual es "Tatooine".

1. **Leer y comprender el enunciado**

   - Objetivo: Cambiar el `homeworld` de Luke solo si actualmente es "Tatooine".
   - Datos iniciales: JSON `starWarsInfo`, la información está en `movie.characters.main.homeworld`.

2. **Dividir el problema en partes**

   - Paso 1: Acceder a `movie.characters.main`.
   - Paso 2: Usar un condicional para verificar si `homeworld` es "Tatooine".
   - Paso 3: Si se cumple la condición, cambiar `homeworld` a "Dagobah".

3. **Código**

```javascript
function cambiarPlanetaSiEsLuke(data) {
  const luke = data.movie.characters.main;

  if (luke.name === "Luke Skywalker" && luke.homeworld === "Tatooine") {
    luke.homeworld = "Dagobah";
  }
}

// Probamos la función
cambiarPlanetaSiEsLuke(starWarsInfo);
console.log(starWarsInfo.movie.characters.main.homeworld); // Debería imprimir "Dagobah" si era "Tatooine"
```

---

### **Ejercicio 2: Agregar un aliado si el personaje es "Darth Vader"**

#### Enunciado

Queremos agregar "Grand Moff Tarkin" como aliado de "Darth Vader", pero solo si no está ya en su lista de aliados.

1. **Leer y comprender el enunciado**

   - Objetivo: Añadir "Grand Moff Tarkin" a `allies` de Darth Vader si no existe ya en el array.
   - Datos iniciales: JSON `starWarsInfo`, el array `allies` está en `movie.characters.villain.allies`.

2. **Dividir el problema en partes**

   - Paso 1: Acceder a `movie.characters.villain`.
   - Paso 2: Verificar si "Grand Moff Tarkin" ya está en el array `allies`.
   - Paso 3: Si no está, añadirlo al array.

3. **Código**

```javascript
function agregarAliado(data) {
  const villano = data.movie.characters.villain;
  //    {
  //     name: "Darth Vader",
  //     homeworld: "Tatooine",
  //     species: "Human",
  //     allies: ["Emperor Palpatine"],
  //   }

  if (
    villano.name === "Darth Vader" &&
    !villano.allies.includes("Grand Moff Tarkin") // devuelve un false pero con el operador ! lo camnbiamos a true
  ) {
    villano.allies.push("Grand Moff Tarkin");
  }
  return villano.allies;
}

console.log(agregarAliado(starWarsInfo));
```
