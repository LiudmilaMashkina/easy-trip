const express = require('express')
const router = express.Router()
const tripsController = require('../controllers/trips')

router.get('/trips', tripsController.getAllTrips)

module.exports = router
