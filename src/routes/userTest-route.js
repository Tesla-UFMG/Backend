const express = require('express')
const router = express.Router()


//Carrega controller
const controller = require('../controllers/userTest-controller')

router.get('/', controller.get)
router.get('/:id', controller.getById)
router.post('/',controller.post)
router.post('/login',controller.login)
router.put('/:id',controller.put)
router.delete('/:id',controller.delete)

module.exports = router