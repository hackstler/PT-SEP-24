# Diferencias entre Flexbox y CSS Grid

## Flexbox

Flexbox se utiliza para **distribuir y alinear elementos** dentro de un contenedor de una manera flexible. Es unidireccional, lo que significa que los elementos se distribuyen en **una sola dirección**: ya sea horizontal (fila) o vertical (columna).

### Propiedades del Contenedor Padre en Flexbox

1. **display**: Activa el modelo de Flexbox al valor `flex`. Hace que el contenedor se convierta en un contenedor flexible.
2. **flex-direction**: Define la dirección en la que se distribuyen los elementos flexibles. Los valores comunes son `row` (horizontal) y `column` (vertical).
3. **flex-wrap**: Controla si los elementos deben ajustarse o "envolverse" si no caben en una sola línea. Los valores son `nowrap` (sin envolver), `wrap` (envolver), y `wrap-reverse`.
4. **flex-flow**: Es una propiedad abreviada que combina `flex-direction` y `flex-wrap` para definir la dirección y el ajuste de los elementos.
5. **justify-content**: Alinea los elementos en la dirección principal. Los valores incluyen `flex-start`, `flex-end`, `center`, `space-between`, y `space-around`.
6. **align-items**: Alinea los elementos a lo largo de la dirección transversal. Los valores son `flex-start`, `flex-end`, `center`, `baseline`, y `stretch`.
7. **align-content**: Alinea las filas de un contenedor flexible con varias líneas. Solo afecta si hay elementos envueltos (es decir, si `flex-wrap` está activado). Los valores incluyen `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, y `stretch`.

### Propiedades de los Elementos Hijos en Flexbox

1. **order**: Define el orden de los elementos flexibles. El valor predeterminado es `0`, pero puede ser cambiado para reorganizar el orden.
2. **flex-grow**: Define el crecimiento de un elemento flexible en relación a los demás. Un valor de `1` permite que el elemento crezca para llenar el espacio disponible.
3. **flex-shrink**: Controla cómo se encogen los elementos cuando el espacio es limitado. Un valor de `1` permite que el elemento se reduzca en proporción.
4. **flex-basis**: Especifica el tamaño inicial del elemento antes de aplicar el crecimiento o encogimiento.
5. **flex**: Es una abreviatura que combina `flex-grow`, `flex-shrink`, y `flex-basis` en una sola declaración.
6. **align-self**: Permite que un elemento sobrescriba el valor `align-items` definido en el contenedor para alinear elementos de manera individual. Los valores son `auto`, `flex-start`, `flex-end`, `center`, `baseline`, y `stretch`.

## CSS Grid

CSS Grid se utiliza para crear **diseños de cuadrícula bidimensionales**. Esto significa que puede distribuir y alinear elementos tanto en dirección horizontal (columnas) como en dirección vertical (filas).

### Propiedades del Contenedor Padre en CSS Grid

1. **display**: Activa el modelo de Grid al valor `grid`. Hace que el contenedor se convierta en un contenedor de cuadrícula.
2. **grid-template**: Define la estructura de las filas y columnas en el grid. Específicamente, utiliza `grid-template-rows` y `grid-template-columns` para definir el tamaño y número de filas y columnas.
3. **gap**: Define el espacio entre las filas y columnas del grid. Anteriormente se usaban `row-gap` y `column-gap`, pero `gap` las combina.
4. **justify-items**: Alinea los elementos dentro de sus celdas a lo largo del eje horizontal. Los valores incluyen `start`, `end`, `center`, y `stretch`.
5. **align-items**: Alinea los elementos dentro de sus celdas a lo largo del eje vertical. Similar a `justify-items`, pero en la dirección vertical.
6. **justify-content**: Alinea el grid completo en el contenedor principal a lo largo del eje horizontal. Útil cuando el grid es más pequeño que el contenedor.
7. **align-content**: Alinea el grid completo en el contenedor principal a lo largo del eje vertical. Similar a `justify-content`, pero en la dirección vertical.

### Propiedades de los Elementos Hijos en CSS Grid

1. **grid-column**: Define el área de columna que ocupará un elemento, usando valores como `1 / 3` para especificar el inicio y el final de las columnas.
2. **grid-row**: Define el área de fila que ocupará un elemento, de forma similar a `grid-column`, con valores como `2 / 4`.
3. **grid-area**: Especifica un área del grid asignando un nombre, o combinando `grid-row` y `grid-column`.
4. **justify-self**: Alinea el elemento dentro de su celda a lo largo del eje horizontal, sobrescribiendo `justify-items`.
5. **align-self**: Alinea el elemento dentro de su celda a lo largo del eje vertical, sobrescribiendo `align-items`.
