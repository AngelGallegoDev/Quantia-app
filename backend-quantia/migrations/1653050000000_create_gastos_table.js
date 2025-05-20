exports.up = (pgm) => {
  pgm.createTable("gastos", {
    id: "id",
    descripcion: { type: "varchar(120)", notNull: true },
    monto: { type: "numeric", notNull: true }
  });
};

exports.down = (pgm) => {
  pgm.dropTable("gastos");
};
