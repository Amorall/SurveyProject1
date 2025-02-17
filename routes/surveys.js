const express = require('express')
const controller = require('../controllers/surveys')
const router = express.Router()

router.post('/', controller.create)
router.get('/', controller.getByID)

module.exports = router