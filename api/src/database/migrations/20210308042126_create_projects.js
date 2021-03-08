
export function up(knex) {
  return knex.schema.createTable('project', (table) => {
     table.increments('id').primary();
     table.string('name').notNullable();
     table.timestamp('created_at').defaultTo(knex.fn.now());
     table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
}

export function down(knex) {
  return knex.schema.dropTable('project');
}
