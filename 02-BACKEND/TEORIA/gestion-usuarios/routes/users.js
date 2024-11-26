const express = require('express')

const router = express.Router()

const { listarUsarios , listarUsuario, crearUsuario, actualizarUsuario, eliminarUsuario} = require('../controllers/users')



router.get('/',listarUsarios ) // endpoint para devolver todos usuarios
router.get('/:id', listarUsuario) // endpoint para devolver un usuario por id
router.post('/', crearUsuario)
router.put('/:id', actualizarUsuario)
router.delete('/:id', eliminarUsuario)


module.exports = router