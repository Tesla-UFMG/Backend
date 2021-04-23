const express = require('express')
const router = express.Router()
const authService = require('../services/auth-service')

//Carrega controller
const controller = require('../controllers/link-controller')

router.get('/',controller.get)
router.get('/:id', authService.autorize, controller.getById)
router.post('/', controller.post)
router.put('/:id', controller.put)
router.delete('/:id', controller.delete)

module.exports = router