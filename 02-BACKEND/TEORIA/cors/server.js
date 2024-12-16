const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({ origin: 'http://127.0.0.1:5500' }))



app.get('/', (req, res) => {
    res.json({ message: 'RESPUESTA DE EJEMPLO' })
})


app.listen(3000, () => {
    console.log('SERVIDOR FUNCIONANDO CORRECTAMENTE')
})