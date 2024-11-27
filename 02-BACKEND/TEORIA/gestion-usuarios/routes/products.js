const express = require('express')


const router = express.Router()

const {listarProductos, agregarProducto, eliminarProducto} = require('../controllers/products')


router.get('/', listarProductos)
router.post('/', agregarProducto)
router.delete('/:id', eliminarProducto)


module.exports = router