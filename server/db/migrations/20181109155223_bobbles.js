exports.up = function(knex, Promise) {
  return knex.schema.createTable('bobbles', function(table) {
    table.increments();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.integer('price').notNullable();
    table.string('image').notNullable();
    table.string('condition').notNullable();
    table.string('category').notNullable();
    table.boolean('status').notNullable().defaultTo(true);
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
    table.integer('user_id').references('id').inTable('bobbles');
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bobbles');
}