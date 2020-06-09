const knex = require('../db/knex')

exports.getAllMinistries = function(req, res){
    knex('ministries')
        .then(ministries => res.json(ministries))
}

exports.getOneMinistry = function(req, res){
    knex('ministries')
        .where('id', req.params.id)
        .then(ministry => {
            if(ministry.length === 0){
                res.status(404).send('Ministry not found')
            } else {
                res.json(ministry)
            }
        })
}

exports.addMinistry = function(req, res){
    knex('ministries')
        .insert(req.body)
        .returning("*")
        .then(newMinistry => res.json(newMinistry))
}

exports.updateMinistry = function(req, res){
    knex('ministries')
        .where('id', req.params.id)
        .update({
            ...req.body,
            updated_at: new Date()
        })
        .returning("*")
        .then(updatedMinistry)
}

exports.deleteMinistry = function(req, res){
    knex('ministries')
        .del()
        .where('id', req.params.id)
        .returning("*")
        .then(deletedMinistry => res.json(deletedMinistry))
}