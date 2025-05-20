require("dotenv").config({ path: __dirname + "/.env" });
console.log("→ DATABASE_URL =", process.env.DATABASE_URL);
const pool = require("./src/db");

pool.connect()
  .then(client => {
    console.log("✅ Conexión exitosa al Postgres");
    client.release();
    process.exit(0);
  })
  .catch(err => {
    console.error("❌ Falló conexión:", err.message || err);
    process.exit(1);
  });
