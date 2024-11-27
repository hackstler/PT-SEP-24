const fs = require('fs')
const path = require('path')


const productosPath = path.join(__dirname, '../data/productos.json')


const leerProductos =()=>{
    const data = fs.readFileSync(productosPath, 'utf-8')
    return JSON.parse(data)
}

const listarProductos =(req, res)=>{
    const productos = leerProductos()
    res.json(productos)
}

const agregarProducto =()=>{


}

module.exports= {listarProductos}