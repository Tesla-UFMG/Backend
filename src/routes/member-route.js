const express = require('express')
const router = express.Router()
//const authService = require('../services/auth-service')

//Carrega controller
const controller = require('../controllers/member-controller')

//retorna documento completo de todos os membros da base de dados
router.get('/', controller.get)

// retorna um membro especifico pelo id
router.get('/:id', controller.getById)

//Retorna todos os membros de um subsistema
router.get('/sub/:sub', controller.getBySub)

//retorna todos os mebros de um ano 
router.get('/year/:year', controller.getByYear)

//cria novo membro
router.post('/' ,controller.post)

//altera dados de um membro especifico 
router.put('/:id',controller.put)

//relaciona imagem com membro
//router.put('/img/:id', controller.addImg)

//apaga membro especifico
router.delete('/:id',controller.delete)

module.exports = router