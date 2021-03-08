
exports.up = function(knex) {
  return knex.schema.createTable('navers', (table) => {
     table.uuid('id').primary();
     table.string('name').notNullable();
     table.string('job_role').notNullable();
     table.date('birthdate').notNullable();
     table.date('admission_date').notNullable();
     table.timestamp('created_at').defaultTo(knex.fn.now());
     table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.droptable('navers');
};
