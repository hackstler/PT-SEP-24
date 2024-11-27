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

const listarProducto =()=>{

}

const escribirProductos =(productos)=> {
    console.log("🚀 ~ escribirProductos ~ productos:", productos)
    fs.writeFileSync(productosPath, JSON.stringify(productos, null, 2))
}


const agregarProducto =(req, res)=>{
    const productos = leerProductos()
    const nuevoProducto = req.body
    nuevoProducto.id = productos.length + 1
    productos.push(nuevoProducto)
    escribirProductos(productos)
    res.json(nuevoProducto)

}

const eliminarProducto =(req, res)=>{ // request (informacion que envia el cliente al servidor) // response es el objeto de respuestas que nos provee expres para responder al cliente.

    const productos = leerProductos()
    const id = +req.params.id
    const productosFiltrados = productos.filter((producto)=>producto.id !== id)
    console.log("🚀 ~ eliminarProducto ~ productosFiltrados:", productosFiltrados)
    if(productosFiltrados.length === productos.length){
       return res.status(404)
    }
    escribirProductos(productosFiltrados)

    res.send('Producto eliminado')
}



module.exports= {listarProductos, agregarProducto, eliminarProducto}