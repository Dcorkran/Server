exports.up = function(knex, Promise) {
  return knex.schema.createTable("parent",function(table){
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').notNullable();
    table.boolean('is_paired').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("parent");
};
