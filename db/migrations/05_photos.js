exports.up = function(knex){
    return knex.schema.createTable('photos', function(table){
        table.increments()
        table.string('photo_description').notNullable()
        table.string('url').notNullable()
    })
}

exports.down = function(knex){
    return knex.schema.dropTable('photos')
}