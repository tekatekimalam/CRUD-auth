const express = require("express");
const asyncHandler = require("express-async-handler");

const User = require("../model/User");

const usersRoute = express.Router();

// Register routes

usersRoute.post(
  "/register",
  asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      throw new Error("User already exist");
    }

    const userCreate = await User.create({ name, email, password });
    res.send(userCreate);
  }),
);

// Login routes
usersRoute.post("/login", (req, res) => {
  res.send("Login routes");
});

// Update routes
usersRoute.put("/update", (req, res) => {
  res.send("Update routes");
});

// Delete routes
usersRoute.delete("/:id", (req, res) => {
  res.send("Delete routes");
});

// Fetching routes
usersRoute.get("/", (req, res) => {
  res.send("Fetching routes");
});

module.exports = usersRoute;
