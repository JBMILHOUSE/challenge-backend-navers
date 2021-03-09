
exports.up = function(knex) {
  return knex.schema.createTable('project_navers', (table) => {
    table.increments('id').primary();
    
    table.integer('projects_id')
         .notNullable()
         .references('id')
         .inTable('projects')
         .onUpdate("CASCADE")
         .onDelete("CASCADE");
    
         table.integer('navers_id')
              .notNullable()
              .references('id')
              .inTable('navers')
              .onUpdate("CASCADE")
              .onDelete("CASCADE");
 });
}

exports.down = function(knex) {
  return knex.schema.dropTable('project_navers');
}
