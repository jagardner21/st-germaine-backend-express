const knex = require('../db/knex')

exports.getAllBulletins = function(req, res){
    knex('bulletins')
        .then(bulletins => res.json(bulletins))
}

exports.getOneBulletin = function(req, res){
    knex('bulletins')
        .where('id', req.params.id)
        .then(bulletin => {
            if(bulletin.length === 0){
                res.status(404).send('Bulletin not found')
            } else {
                res.json(bulletin)
            }
        })
}

exports.addBulletin = function(req, res){
    knex('bulletins')
        //may need to add "created_at" in order to display date posted
        .insert(req.body)
        .returning("*")
        .then(newBulletin => res.json(newBulletin))
}

exports.updateBulletin = function(req, res){
    knex('bulletins')
        .where('id', req.params.id)
        .update({
            ...req.body,
            updated_at: new Date()
        })
        .returning("*")
        .then(updatedBulletin)
}

exports.deleteBulletin = function(req, res){
    knex('bulletins')
        .del()
        .where('id', req.params.id)
        .returning("*")
        .then(deletedBulletin => res.json(deletedBulletin))
}