const knex = require('../db/knex')

exports.getAllLinks = function(req, res){
    knex('links')
        .then(links => res.json(links))
}

exports.getOneLink = function(req, res){
    knex('links')
        .where('id', req.params.id)
        .then(link => {
            if(link.length === 0){
                res.status(404).send('Link not found')
            } else {
                res.json(link)
            }
        })
}

exports.addLink = function(req, res){
    knex('links')
        .insert(req.body)
        .returning("*")
        .then(newLink => res.json(newLink))
}

exports.updateLink = function(req, res){
    knex('links')
        .where('id', req.params.id)
        .update({
            ...req.body,
            updated_at: new Date()
        })
        .returning("*")
        .then(updatedLink)
}

exports.deleteLink = function(req, res){
    knex('links')
        .del()
        .where('id', req.params.id)
        .returning("*")
        .then(deletedLink => res.json(deletedLink))
}