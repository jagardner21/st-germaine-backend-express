exports.up = function(knex){
    return knex.schema.createTable('bulletins', function(table){
        table.increments()
        table.string('display_date').notNullable()
        table.string('url').notNullable()
    })
}

exports.down = function(knex){
    return knex.schema.dropTable('bulletins')
}