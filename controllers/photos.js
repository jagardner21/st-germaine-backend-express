const knex = require('../db/knex')

exports.getAllPhotos = function(req, res){
    knex('photos')
        .then(photos => res.json(photos))
}

exports.getOnePhoto = function(req, res){
    knex('photos')
        .where('id', req.params.id)
        .then(photo => {
            if(photo.length === 0){
                res.status(404).send('Photo not found')
            } else {
                res.json(photo)
            }
        })
}

exports.addPhoto = function(req, res){
    knex('photos')
        .insert(req.body)
        .returning("*")
        .then(newPhoto => res.json(newPhoto))
}

exports.updatePhoto = function(req, res){
    knex('photos')
        .where('id', req.params.id)
        .update({
            ...req.body,
            updated_at: new Date()
        })
        .returning("*")
        .then(updatedPhoto)
}

exports.deletePhoto = function(req, res){
    knex('photos')
        .del()
        .where('id', req.params.id)
        .returning("*")
        .then(deletedPhoto => res.json(deletedPhoto))
}