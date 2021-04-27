const express = require("express");
const dbConnect = require("./config/dbConfig");
const User = require("./model/User");

const app = express();

// Connect to database
dbConnect();

// Middleware
app.use(express.json());

// ******** ROUTES ********

// Register routes
app.post("/api/users/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });

    res.send(user);
  } catch (err) {
    console.log(err);
  }
});

// Login routes
app.post("/api/users/login", (req, res) => {
  res.send("Login routes");
});

// Update routes
app.put("/api/users/update", (req, res) => {
  res.send("Update routes");
});

// Delete routes
app.delete("/api/users/:id", (req, res) => {
  res.send("Delete routes");
});

// Fetching routes
app.get("/api/users", (req, res) => {
  res.send("Fetching routes");
});

// ******** SERVER ********
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));

// maia
// 8nYPzAlfPpEidmx3
// mongodb+srv://maia:<password>@cluster0.wrlth.mongodb.net/test
