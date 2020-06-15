const express = require('express');
const router = express.Router();
const ministriesController = require('../controllers/ministries')

router.get('/ministries', ministriesController.getAllMinistries)
router.get('/ministries/:id', ministriesController.getOneMinistry)
router.post('/ministries', ministriesController.addMinistry)
router.patch('/ministries/:id', ministriesController.updateMinistry)
router.delete('/ministries/:id', ministriesController.deleteMinistry)


module.exports = router;