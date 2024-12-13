const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const axios = require("axios");
const sqlite3 = require("sqlite3").verbose();
const schedule = require("node-schedule");

// Configuración de Puppeteer con el plugin Stealth
puppeteer.use(StealthPlugin());

// Configuración de la base de datos SQLite
const db = new sqlite3.Database("./discs.db", (err) => {
    if (err) {
        console.error("Error al conectar con la base de datos:", err.message);
    } else {
        console.log("Conectado a la base de datos SQLite.");
    }
});

// Verificar tablas existentes
db.all("SELECT name FROM sqlite_master WHERE type='table';", (err, tables) => {
    if (err) {
        console.error("Error al consultar las tablas de la base de datos:", err.message);
    } else {
        console.log("Tablas actuales en la base de datos:", tables);
    }
});

// Crear tabla si no existe
db.run(`
    CREATE TABLE IF NOT EXISTS discs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        category TEXT,
        price REAL,
        url TEXT,
        date TEXT
    );
`, (err) => {
    if (err) {
        console.error("Error al crear la tabla 'discs':", err.message);
    } else {
        console.log("Tabla 'discs' verificada/creada exitosamente.");
    }
});

// Función para obtener el contenido HTML con ScraperAPI
async function fetchWithScraperAPI(url) {
    const apiKey = "be73e7bd4ff88c6e1d11989919bb19d9";
    const scraperApiUrl = `http://api.scraperapi.com?api_key=${apiKey}&url=${encodeURIComponent(url)}`;

    try {
        const response = await axios.get(scraperApiUrl);
        return response.data; // HTML de la página
    } catch (err) {
        console.error("Error al obtener datos con ScraperAPI:", err.message);
        return null;
    }
}

// Función para procesar con Puppeteer
async function scrapeWithPuppeteer(html) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    try {
        await page.setContent(html, { waitUntil: "domcontentloaded" });

        const discs = await page.evaluate(() => {
            const elements = document.querySelectorAll(".Article-itemGroup");
            return Array.from(elements).map((el) => {
                const title = el.querySelector(".Article-title")?.innerText.trim();
                const category = el.querySelector(".Article-desc")?.innerText.trim();
                const priceText = el.querySelector(".userPrice")?.innerText.trim();
                const price = priceText
                    ? parseFloat(priceText.replace(",", ".").replace(/[^\d.]/g, ""))
                    : null;
                const url = el.querySelector("a")?.href;
                return { title, category, price, url };
            });
        });

        console.log(`Discos encontrados: ${discs.length}`);
        await browser.close();
        return discs;
    } catch (err) {
        console.error("Error al procesar con Puppeteer:", err.message);
        await browser.close();
        return [];
    }
}

// Función para guardar y comparar precios
function saveAndCompareDiscs(discs) {
    const today = new Date().toISOString().split("T")[0];

    discs.forEach((disc) => {
        db.get(
            "SELECT * FROM discs WHERE title = ? AND category = ? ORDER BY date DESC LIMIT 1",
            [disc.title, disc.category],
            (err, row) => {
                if (err) {
                    console.error("Error al consultar la base de datos:", err.message);
                }

                if (!row) {
                    console.log(`Nuevo disco encontrado: ${disc.title}`);
                } else if (row.price !== disc.price) {
                    console.log(
                        `Cambio de precio: ${disc.title} - Antes: ${row.price}€, Ahora: ${disc.price}€`
                    );
                }
                db.run(
                    "INSERT INTO discs (title, category, price, url, date) VALUES (?, ?, ?, ?, ?)",
                    [disc.title, disc.category, disc.price, disc.url, today],
                    (err) => {
                        if (err) {
                            console.error("Error al insertar en la base de datos:", err.message);
                        }
                    }
                );
            }
        );
    });
}

// Función para filtrar por categoría
function filterByCategory(category, callback) {
    db.all(
        "SELECT * FROM discs WHERE category = ? ORDER BY date DESC",
        [category],
        (err, rows) => {
            if (err) {
                console.error("Error al filtrar por categoría:", err.message);
                callback([]);
            } else {
                callback(rows);
            }
        }
    );
}

// Función principal
async function main() {
    const url = "https://www.fnac.com/SearchResult/ResultList.aspx?Search=sabrina+carpenter&sft=1&sa=0";
    const html = await fetchWithScraperAPI(url);

    if (html) {
        const discs = await scrapeWithPuppeteer(html);
        if (discs.length > 0) {
            saveAndCompareDiscs(discs);
        } else {
            console.log("No se encontraron discos para procesar.");
        }
    } else {
        console.log("No se pudo obtener la página HTML.");
    }
}

// Programar la ejecución diaria
schedule.scheduleJob("0 8 * * *", () => {
    console.log("Ejecutando tarea programada...");
    main();
});

// Prueba de filtrado por categoría
filterByCategory("Pop", (results) => {
    console.log(`Discos en la categoría 'Pop':`, results);
});

// Ejecutar el script
main();
