
exports.up = function(knex) {
  return knex.schema.createTable('project_navers', (table) => {
    table.increments('id').primary();
    table.uuid('project_id').notNullable().references('id').inTable('projects');
    table.uuid('navers_id').notNullable().references('id').inTable('navers');
 });
}

exports.down = function(knex) {
  return knex.schema.dropTable('project_navers');
};
