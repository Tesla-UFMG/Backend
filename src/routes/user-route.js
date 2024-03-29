const express = require('express')
const router = express.Router()
const authService = require('../services/auth-service')

//Carrega controller
const controller = require('../controllers/user-controller')

router.get('/', controller.get)
router.get('/', controller.getById)
router.post('/',authService.autorize, controller.post)
router.post('/authenticate',controller.authenticate)
router.put('/:id',controller.put)
router.delete('/:id',controller.delete)

module.exports = router