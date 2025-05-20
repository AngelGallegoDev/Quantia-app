-- db/init.sql

-- Solo creación de esquema, sin DROP
CREATE TABLE IF NOT EXISTS gastos (
  id SERIAL PRIMARY KEY,
  descripcion VARCHAR(120) NOT NULL,
  monto NUMERIC NOT NULL
);
