const express = require("express");

const dbConnect = require("./config/dbConfig");
const usersRoute = require("./routes/userRoute");
const app = express();

// Connect to database
dbConnect();

// Middleware
app.use(express.json());

// ******** ROUTES ********
app.use("/api/users", usersRoute);

// ******** SERVER ********
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
