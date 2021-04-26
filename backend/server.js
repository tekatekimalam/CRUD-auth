const express = require("express");

const app = express();
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

// Listening server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
