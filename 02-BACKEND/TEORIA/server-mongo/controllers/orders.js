const Order = require('../models/orders')
const Product = require('../models/products')

const createOrder = async (req, res) => {

    try {
        const { products, user } = req.body
        console.log("🚀 ~ createOrder ~ user:", user)
        console.log("🚀 ~ createOrder ~ products:", products)


        // buscar producto en la db (DONE)
        // necesitamos saber cuanta catidad por productos hay y su precio
        // Para calcular el total price debemos sumar cada precio total del producto
        // Validar el stock disponible (DONE)
        // restar la cantidad de productos en el order del stock (actualizar stock) (DONE)
        // totalPrice, quantity, stock
        let totalPrice = 0;
        for (const item of products) {
            console.log("🚀 ~ createOrder ~ item:", item)
            const product = await Product.findById(item.product)
            console.log("🚀 ~ createOrder ~ product:", product)
            if (!product) {
                return res.status(404).json({ message: 'Not found' })
            }
            console.log("🚀 ~ HOLAAA")
            console.log("🚀 ~ createOrder ~ item.quantity > product.stock:", item.quantity > product.stock)
            if (item.quantity > product.stock) return res.status(400).json({ message: 'eres un estafador' })
            totalPrice += product.price * item.quantity
            console.log("🚀 ~ createOrder ~ totalPrice:", totalPrice)
            product.stock = product.stock - item.quantity
            console.log("🚀 ~ createOrder ~ product:", product.stock)
            await product.save()
        }


        const order = await Order.create({
            user,
            products,
            totalPrice
        })

        res.status(201).json(order)

    } catch (error) {
        console.log("🚀 ~ createOrder ~ error:", error)
        res.status(500)
    }


}

module.exports = { createOrder }