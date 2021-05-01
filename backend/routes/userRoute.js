const express = require("express");
const asyncHandler = require("express-async-handler");

const User = require("../model/User");
const generateToken = require("../utils/generateToken");
const authMiddleware = require("../middlewares/authMiddleware");

const usersRoute = express.Router();

usersRoute.post(
  "/register",
  asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      throw new Error("User already exist");
    }

    const newUser = await User.create({ name, email, password });
    res.send({
      id: newUser._id,
      email: newUser.email,
      passord: newUser.password,
      token: generateToken(newUser._id),
    });
  }),
);

// Login routes
usersRoute.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (user && (await user.isPasswordMatch(password))) {
      res.status(200);
      res.send({
        id: user._id,
        email: user.email,
        passord: user.password,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid credentials");
    }
  }),
);

// Update routes
usersRoute.put("/update", authMiddleware, (req, res) => {
  res.send("Update routes");
});

// Delete routes
usersRoute.delete("/:id", (req, res) => {
  res.send("Delete routes");
});

// Fetching routes
usersRoute.get("/", authMiddleware, (req, res) => {
  res.send(req.user);
});

module.exports = usersRoute;
