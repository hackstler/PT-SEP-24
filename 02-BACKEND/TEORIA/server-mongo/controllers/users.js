const User = require('../models/users')



const updateUser = async (req, res) => {

    try {
        const user = await User.findByIdAndUpdate(req.params.id, { ...req.body })
        const userUpdated = await User.findById(user._id)
        if (!user) {
            return res.status(404).json({ errorMessage: 'User not found' })
        }
        res.json(userUpdated)

    } catch (error) {
        console.log("🚀 ~ updateUser ~ error:", error)
        res.status(500)
    }
}

const deleteUser = async (req, res) => {
    try {
        const userDelete = await User.findByIdAndDelete(req.params.id)
        console.log("🚀 ~ deleteUser ~ userDelete:", userDelete)
        if (!userDelete) {
            return res.status(404).json({ errorMessage: 'User not found' })
        }
        res.json({ message: 'User deleted' })

    } catch (error) {
        console.log("🚀 ~ deleteUser ~ error:", error)
        res.status(500)

    }
}

module.exports = { updateUser, deleteUser }