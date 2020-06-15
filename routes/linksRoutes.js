const express = require('express');
const router = express.Router();
const linksController = require('../controllers/links')

router.get('/links', linksController.getAllLinks)
router.get('/links/:id', linksController.getOneLink)
router.post('/links', linksController.addLink)
router.patch('/links/:id', linksController.updateLink)
router.delete('/links/:id', linksController.deleteLink)


module.exports = router;
