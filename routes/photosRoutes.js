const express = require('express');
const router = express.Router();
const photosController = require('../controllers/photos')

router.get('/photos', photosController.getallPhotos)
router.get('/photos/:id', photosController.getOnePhoto)
router.post('/photos', photosController.addPhoto)
router.patch('/photos/:id', photosController.updatePhoto)
router.delete('/photos/:id', photosController.deletePhoto)


module.exports = router;