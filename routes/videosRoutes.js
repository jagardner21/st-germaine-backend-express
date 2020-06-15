const express = require('express');
const router = express.Router();
const videosController = require('../controllers/videos')

router.get('/videos', videosController.getAllVideos)
router.get('/videos/:id', videosController.getOneVideo)
router.post('/videos', videosController.addVideo)
router.patch('/videos/:id', videosController.updateVideo)
router.delete('/videos/:id', videosController.deleteVideo)


module.exports = router;