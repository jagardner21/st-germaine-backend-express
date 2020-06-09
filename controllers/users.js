const knex = require('../db/knex')

exports.getAllUsers = function(req, res){
    knex('users')
        .then(users => res.json(users))
}

exports.getOneUser = function(req, res){
    knex('users')
        .where('id', req.params.id)
        .then(user => {
            if(user.length === 0){
                res.status(404).send('User not found')
            } else {
                res.json(user)
            }
        })
}

exports.addUser = function(req, res){
    knex('users')
        .insert(req.body)
        .returning("*")
        .then(newUser => res.json(newUser))
}

exports.updateUser = function(req, res){
    knex('users')
        .where('id', req.params.id)
        .update({
            ...req.body,
            updated_at: new Date()
        })
        .returning("*")
        .then(updatedUser)
}

exports.deleteUser = function(req, res){
    knex('users')
        .del()
        .where('id', req.params.id)
        .returning("*")
        .then(deletedUser => res.json(deletedUser))
}