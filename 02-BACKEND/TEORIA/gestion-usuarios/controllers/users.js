const fs = require('fs')
const path = require('path')


const usuariosPath = path.join(__dirname, '../data/usuarios.json')


const leerUsarios =()=>{
    const data = fs.readFileSync(usuariosPath, 'utf-8')
    console.log("🚀 ~ leerUsarios ~ data:", data)
    return JSON.parse(data)
}

const listarUsarios =(req, res)=>{
    const users = leerUsarios()
    res.json(users)
}

const listarUsuario =(req, res)=>{
    const id = +req.params.id
    console.log("🚀 ~ listarUsuario ~ id:", id)
    const users = leerUsarios()
    console.log("🚀 ~ listarUsuario ~ users:", users)
    const user = users.find((user) => {
        console.log("🚀 ~ user ~ user.id === id:", user.id , id)
        return user.id === id
    })
    console.log("🚀 ~ listarUsuario ~ user:", user)
    if(user) return res.json(user)
    res.status(404)
    res.send('Usuario no encontrado')
}

module.exports = {leerUsarios, listarUsarios, listarUsuario}