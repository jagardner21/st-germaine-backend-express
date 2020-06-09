const knex = require('../db/knex')

exports.getAllVideos = function(req, res){
    knex('videos')
        .then(videos => res.json(videos))
}

exports.getOneVideo = function(req, res){
    knex('videos')
        .where('id', req.params.id)
        .then(video => {
            if(video.length === 0){
                res.status(404).send('Video not found')
            } else {
                res.json(video)
            }
        })
}

exports.addVideo = function(req, res){
    knex('videos')
        .insert(req.body)
        .returning("*")
        .then(newVideo => res.json(newVideo))
}

exports.updateVideo = function(req, res){
    knex('videos')
        .where('id', req.params.id)
        .update({
            ...req.body,
            updated_at: new Date()
        })
        .returning("*")
        .then(updatedVideo)
}

exports.deleteVideo = function(req, res){
    knex('videos')
        .del()
        .where('id', req.params.id)
        .returning("*")
        .then(deletedVideo => res.json(deletedVideo))
}