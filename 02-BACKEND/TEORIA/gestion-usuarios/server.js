const express = require('express') // importando el modulo de express 
const app = express() // Creamos una instancia de express
const userRouter = require('./routes/users')
const productRouter = require('./routes/products')

app.use(express.json())
app.use('/users', userRouter)
app.use('/productos', productRouter)

app.listen(3000, ()=>{
    console.log('El servidor se inicio correctamente')
})