
exports.up = (knex) => {
  return knex.schema.createTable('carros', (table) => {
    table.increments();
    table.string('modelo', 80).notNullable();
    table.string('foto').notNullable();
    table.integer('ano').notNullable();
    table.decimal('preco', 9.2).notNullable();
    table.boolean('destaque').notNullable().defaultTo(false);
    table.integer("marca_id").notNullable().unsigned();
    table.foreign('marca_id')
         .references("marcas.id")
         .onDelete("restrict")
         .onUpdate("cascade")

    // cria os campos created_at e updated_at
    table.timestamps(true, true);
  })
};

exports.down = (knex) => knex.schema.dropTable('carros');