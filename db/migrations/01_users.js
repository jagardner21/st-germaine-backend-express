exports.up = function(knex){
    return knex.schema.createTable('users', function(table){
        table.increments()
        table.string('name').notNullable()
        table.boolean('is_admin').notNullable()
    })
}

exports.down = function(knex){
    return knex.schema.dropTable('users')
}