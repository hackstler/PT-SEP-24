const { json } = require("express");
const User = require("../models/users");
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign({ id: user.id, name: user.name }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const registerUser = async (req, res) => {
  const { email, name, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }
    const newUser = await User.create({ email, name, password });
    const token = generateToken(newUser);
    if (!token) {
      return res.status(400).json({ message: "Error al crear el token" });
    }
    res.status(200).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      token: token,
    });
  } catch (error) {
    console.log("🚀 ~ registerUser ~ error:", error);
    res.status(500);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log("🚀 ~ loginUser ~ password:", password);

  try {
    const user = await User.findOne({ email });
    const isPassword = await user.matchPassword(password, user.password);
    const token = generateToken(user);
    if (user && isPassword) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: token,
      });
    }
  } catch (error) {
    console.log("🚀 ~ loginUser ~ error:", error);
  }
};

module.exports = { registerUser, loginUser };
