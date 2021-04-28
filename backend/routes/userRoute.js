const express = require("express");

const User = require("../model/User");

const usersRoute = express.Router();

// Register routes
usersRoute.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });

    res.send(user);
  } catch (err) {
    console.log(err);
  }
});

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
