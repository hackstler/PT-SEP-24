const express = require('express')
const connectDB = require('./config/db')
const userRoutes = require('./routes/users')
require('dotenv').config();

const server = express()

connectDB()


server.use(express.json())
server.use('/users', userRoutes)

server.listen(3000, () => {
    console.log('EL SERVIDOR SE INICIO CORRECTAMENTE')
})

