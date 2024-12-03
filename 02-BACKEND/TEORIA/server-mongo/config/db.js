const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("CONEXION A MONGO DB COMPLETADA")
    } catch (error) {
        console.log("🚀 ~ connectDB ~ error:", error)
    }
}

module.exports = connectDB