exports.up = function(knex){
    return knex.schema.createTable('ministries', function(table){
        table.increments()
        table.string('ministry_name').notNullable()
        // not all ministries will have a url, urls are optional
        table.string('url')
    })
}

exports.down = function(knex){
    return knex.schema.dropTable('ministries')
}