const express = require('express')
const router = express.Router()

//Carrega controller
const controller = require('../controllers/gallery-controller')

/*
  Anos: 2017,2018,2019
*/

//retorna todas as galerias cadastradas
router.get('/', controller.get)

//retorna galeria por id
router.get('/:id', controller.getById)

//retorna array com link de todas as imagens de um determinado ano
router.get('/year/:year', controller.getByYear)

//cria nova galeria
router.post('/',controller.post)

//aletera dados da galeria
router.put('/:id',controller.put)

//altera imagem de uma galeria
router.put('/img/:id' ,controller.put)

//apaga uma unica imagem de uma galeria
//router.delete('img/:imgId&:galleryId', controller.deleteImg)

//apaga galeria
router.delete('/:id',controller.delete)

module.exports = router