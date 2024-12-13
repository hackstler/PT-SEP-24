const sqlite3 = require("sqlite3").verbose();

// Configuración de la base de datos SQLite
const db = new sqlite3.Database("./discs.db", (err) => {
    if (err) {
        console.error("Error al conectar con la base de datos:", err.message);
    } else {
        console.log("Conectado a la base de datos SQLite.");
    }
});

// Función para leer todos los discos
function viewAllDiscs(callback) {
    db.all("SELECT * FROM discs ORDER BY date DESC", (err, rows) => {
        if (err) {
            console.error("Error al leer los datos:", err.message);
            callback([]);
        } else {
            callback(rows);
        }
    });
}

// Llamada para visualizar todos los datos
viewAllDiscs((rows) => {
    console.log("Datos almacenados en la tabla 'discs':");
    console.table(rows); // Muestra los datos en formato de tabla
});
