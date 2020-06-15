const express = require('express');
const router = express.Router();
const bulletinsController = require('../controllers/bulletins')

router.get('/bulletins', bulletinsController.getAllBulletins)
router.get('/bulletins/:id', bulletinsController.getOneBulletin)
router.post('/bulletins', bulletinsController.addBulletin)
router.patch('/bulletins/:id', bulletinsController.updateBulletin)
router.delete('/bulletins/:id', bulletinsController.deleteBulletin)


module.exports = router;
