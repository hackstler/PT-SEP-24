const express = require('express')


const router = express.Router()

const {listarProductos} = require('../controllers/products')


router.get('/', listarProductos)


module.exports = router