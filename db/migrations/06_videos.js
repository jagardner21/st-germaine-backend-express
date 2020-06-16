exports.up = function(knex){
    return knex.schema.createTable('videos', function(table){
        table.increments()
        table.string('link_title').notNullable()
        table.string('url').notNullable()
    })
}

exports.down = function(knex){
    return knex.schema.dropTable('videos')
}