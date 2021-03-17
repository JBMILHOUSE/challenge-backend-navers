
exports.up = function(knex) {
  return knex.schema.createTable('project', (table) => {
     table.increments('id').primary();
     table.string('name').notNullable();

     table.integer('navers_id')
         .references('navers.id')
         .notNullable()
         .onUpdate("CASCADE")
         .onDelete("CASCADE");

     table.timestamp('created_at').defaultTo(knex.fn.now());
     table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('project');
}
