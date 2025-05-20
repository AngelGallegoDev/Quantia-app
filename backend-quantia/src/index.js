// backend-quantia/src/index.js
const express = require("express");
const cors = require("cors");
const pool = require("./db");            // importa tu Pool correctamente
require("dotenv").config();              // carga .env

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Inicio API
app.get("/", (_req, res) => {
  res.send("🎉 Bienvenido a la API de Quantia! Prueba /api/ping");
});
// Test de ping
app.get("/api/ping", async (_req, res) => {
  try {
    const { rows } = await pool.query("SELECT NOW()");
    res.json({ now: rows[0].now });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Aquí nos aseguramos de conectar y **no** salir del proceso
pool.connect()
  .then(() => console.log("🟢 DB conectada correctamente"))
  .catch(err => {
    console.error("🔴 DB ERROR:", err.message);
    // No hacemos process.exit(1) para que el servidor siga vivo
  });

// Arrancamos el servidor y mantenemos el proceso vivo
app.listen(PORT, () => {
  console.log(`🚀 API corriendo en http://localhost:${PORT}`);
});
