
exports.up = function(knex) {

    return knex.schema.createTable('personal', table => {
        table.increments('id').primary()
        table.string('nome').notNull()
        table.string('email').notNull().unique()
        table.integer('userId').references('id').inTable('users').notNull().unsigned()

    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('personal')
};
