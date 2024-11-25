const express = require('express')

const router = express.Router()

const { listarUsarios , listarUsuario} = require('../controllers/users')



router.get('/',listarUsarios ) // endpoint para devolver todos usuarios
router.get('/:id', listarUsuario) // endpoint para devolver un usuario por id
router.post('/')
router.put('/:id')


module.exports = router