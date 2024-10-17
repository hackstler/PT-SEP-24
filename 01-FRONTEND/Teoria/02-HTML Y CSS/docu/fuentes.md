### Conceptos y Propiedades de las Fuentes en CSS

Las fuentes o tipografías son un aspecto fundamental en el diseño web, ya que influyen significativamente en la apariencia y la legibilidad del contenido. A continuación, se explica detalladamente cada uno de los elementos relacionados con la tipografía y su aplicación práctica.

#### Tipos de Fuentes

Las fuentes se pueden clasificar según sus características:

- **Con serifa (serif):** Son aquellas que tienen pequeños adornos o líneas en los bordes de las letras. Se consideran más tradicionales y formales.
- **Sin serifa (sans-serif):** Carecen de estos adornos y tienen un aspecto más limpio y moderno. Son comunes para interfaces digitales por su claridad.
- **Monoespaciadas (monospace):** Cada carácter ocupa el mismo ancho, comúnmente usadas para código debido a su alineación uniforme.

#### Propiedades CSS Comunes de Fuentes

1. **`font-family`:** Define la fuente a utilizar. Se puede especificar más de una fuente como alternativa en caso de que la primera no esté disponible en el sistema del usuario. Ejemplo:

   ```css
   div {
     font-family: Vegur, "PT Sans", Verdana, sans-serif;
   }
   ```

   Esta propiedad permite que el navegador elija la siguiente fuente en la lista si no encuentra la primera.

2. **`font-size`:** Controla el tamaño de la fuente. Se puede definir de forma absoluta (`small`, `large`, etc.), o mediante unidades como `px`, `em`, `rem`, y `%`, que ofrecen flexibilidad.

   ```css
   h2 {
     font-size: 20px; /* Tamaño específico */
     font-size: 2em; /* Tamaño relativo */
     font-size: 3rem; /* Tamaño basado en el elemento raíz */
   }
   ```

3. **`font-style`:** Define el estilo de la fuente, como `normal`, `italic` o `oblique`. Es útil para destacar texto mediante cursivas.

   ```css
   h3 {
     font-style: italic;
   }
   ```

4. **`font-weight`:** Controla el grosor de la fuente, con valores entre 100 (muy fina) y 900 (muy gruesa).
   ```css
   h4 {
     font-weight: bold;
   }
   ```

#### Limitaciones y Alternativa con `@font-face`

Una limitación al usar `font-family` es que la fuente debe estar instalada en el dispositivo del usuario. Esto se puede superar con la regla `@font-face`, que permite cargar fuentes desde archivos externos, asegurando que todos los usuarios vean la misma tipografía.

Ejemplo:

```css
@font-face {
  font-family: "Roboto";
  src: local("Roboto"),
    url("/assets/fonts/Roboto-Regular.ttf") format("truetype"), url("/fonts/roboto.woff2")
      format("woff2"), url("/fonts/roboto.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
```

La propiedad `src` define las ubicaciones de las fuentes y los formatos de archivo alternativos, asegurando compatibilidad con diferentes navegadores.

#### Uso de Google Fonts

[Google Fonts](https://fonts.google.com/) es una plataforma gratuita que permite importar fuentes fácilmente a través de CSS o HTML:

- **CSS con `@import`:**
  ```css
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
  ```
  Usar `@import` permite aplicar la fuente directamente a todo el documento o a elementos específicos.
- **HTML:**
  ```html
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
  />
  ```
  Incluir un `<link>` en el `<head>` del HTML permite usar la fuente sin necesidad de descargarla, aunque se requiere conexión a Internet.

#### Otras Plataformas de Fuentes

Además de Google Fonts, existen otros recursos para fuentes web:

- **Adobe Fonts:** Miles de fuentes disponibles con licencia para cualquier tipo de proyecto.
- **Fonts.com y TypeNetwork:** Ofrecen fuentes de calidad con opciones de licenciamiento y alojamiento de fuentes.
- **Font Squirrel:** Proporciona fuentes gratuitas con licencia comercial, ideales para proyectos web.

### Mini-Reto: Implementación de Fuentes

Dado el siguiente HTML, se deben realizar dos acciones en el archivo CSS:

1. **Importar la Fuente “Open Sans” desde Google Fonts y aplicarla a los párrafos `<p>`**

   ```css
   @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400&display=swap");

   p {
     font-family: "Open Sans", sans-serif;
   }
   ```

2. **Implementar una `@font-face` con la fuente “Bergdool” para los encabezados `<h1>` y `<h2>`**

   ```css
   @font-face {
     font-family: "Bergdool";
     src: url("/ruta/bergdool.woff2") format("woff2"), url("/ruta/bergdool.woff")
         format("woff");
     font-weight: normal;
     font-style: normal;
   }

   h1,
   h2 {
     font-family: "Bergdool", sans-serif;
   }
   ```

Al completar estas configuraciones, los párrafos se mostrarán con la fuente “Open Sans” y los encabezados con “Bergdool”, asegurando un diseño consistente y atractivo. Esto asegura una experiencia tipográfica controlada y atractiva para el usuario.
