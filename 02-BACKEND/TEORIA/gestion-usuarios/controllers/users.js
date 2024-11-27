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

const escribirUsuarios=(usuarios)=>{
    const data = fs.writeFileSync(usuariosPath, JSON.stringify(usuarios))
    console.log("🚀 ~ escribirUsuario ~ data:", data)
}

const crearUsuario =(req, res)=>{
    const usuarios = leerUsarios() // [{}]
    const newUser = req.body  //{    "nombre": "Carlos Gómez", "email": "carlos.gomez@example.com"}
    newUser.id = usuarios.length + 1
    newUser //{ id: 4,   "nombre": "Carlos Gómez", "email": "carlos.gomez@example.com"}
    usuarios.push(newUser)
    escribirUsuarios(usuarios)
    res.status(200).json(newUser)

}

const actualizarUsuario =(req, res)=>{
    const usuarios = leerUsarios()
    const newInfoUser = req.body
    const id = +req.params.id
    const index = usuarios.findIndex(user=> user.id === id)

    if(index === -1){ // que el id no existe en nuestros usuarios
        return res.status(404).json({error: 'Usuario no encontrado'})
    }

    // { "nombre": "Sergio Muñoz", "email": "sergio.muñoz@example.com", "id": 5 } usuarios[index]
    // { "nombre": "Sergio Perez", "email": "sergio.muñoz@example.com", "address: "calle valmojado 152"} newInfoUser
    usuarios[index] = {...usuarios[index], ...newInfoUser}  // { "nombre": "Sergio Perez", "email": "sergio.muñoz@example.com", id: 5,  "address: "calle valmojado 152"}
    guardarUsuarios(usuarios)

    res.status(200).json(usuarios[index])

}
const eliminarUsuario =(req, res)=>{
    const usuarios = leerUsarios()
    const id =  +req.params.id
    const usersFiltered = usuarios.filter(user=>user.id !== id)

    if(usersFiltered.length === usuarios.length){ // que el id no existe en nuestros usuarios
        return res.status(404).json({error: 'Usuario no encontrado'})
    }
    guardarUsuarios(usersFiltered)
    res.status(200).send()


}
module.exports = {leerUsarios, listarUsarios, listarUsuario, crearUsuario, actualizarUsuario, eliminarUsuario}