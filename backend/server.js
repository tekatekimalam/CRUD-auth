const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Connect to database
mongoose
  .connect(
    "mongodb+srv://maia:8nYPzAlfPpEidmx3@cluster0.wrlth.mongodb.net/book-app",
    {
      useFindAndModify: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
    },
  )
  .then(() => console.log("Database connected"))
  .catch(err => console.log(err));

// ******** ROUTES ********

// Register routes
app.post("/api/users/register", (req, res) => {
  res.send("Register routes");
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
