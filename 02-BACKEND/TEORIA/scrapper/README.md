Aquí tienes el README formateado en **Markdown** para que se vea profesional y organizado:

```markdown
# Scraper - Fnac

Este proyecto es un scraper diseñado para extraer información de discos desde la página de Fnac y guardar los datos en una base de datos SQLite. Además, permite visualizar y gestionar los datos obtenidos de forma sencilla.

---

## Requisitos

Antes de comenzar, asegúrate de tener instalado **Node.js** y **npm** en tu sistema.

---

## Instalación

1. Clona este repositorio o descarga el archivo del proyecto.
2. Instala las dependencias necesarias con el siguiente comando:

   ```bash
   npm i
   ```

---

## Configuración

### Modificar el Proxy

Para configurar el proxy, crea una cuenta en **ScraperAPI** y obtén tus credenciales desde el siguiente enlace:

👉 [https://dashboard.scraperapi.com/](https://dashboard.scraperapi.com/)

Una vez obtengas tus credenciales, actualiza el código del scraper con tu clave de API.

### Cambiar la URL a Scrappear

Si necesitas modificar la URL de la página a scrapear, actualiza la siguiente línea de código en `scraper.js`:

```javascript
const url = "https://www.fnac.com/SearchResult/ResultList.aspx?Search=sabrina+carpenter&sft=1&sa=0";
```

Reemplaza la URL con la dirección de la página que deseas scrapear.

---

## Uso

### Ejecutar el Scraper

Para ejecutar el scraper y almacenar los datos en la base de datos, utiliza el siguiente comando:

```bash
node scraper.js
```

### Visualizar los Datos

Para visualizar los datos almacenados en la base de datos, ejecuta el siguiente comando:

```bash
node viewDiscs.js
```

Esto mostrará toda la información con una estructura completa en la consola.

---

## Notas

- Asegúrate de tener conexión a internet para que el scraper funcione correctamente.
- Si encuentras algún problema con el proxy, revisa tus credenciales en **ScraperAPI**.
- La información obtenida se almacena en la base de datos `discs.db`.

