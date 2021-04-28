const express = require("express");

const dbConnect = require("./config/dbConfig");
const usersRoute = require("./routes/userRoute");
const error = require("./middlewares/errorMiddlewareHandler");

const app = express();

// Connect to database
dbConnect();

// ******** MIDDLEWARES ********

// Json parser
app.use(express.json());

// Routes
app.use("/api/users", usersRoute);

// Error handling
app.use(error.errorMiddleWareHandler);

// ******** SERVER ********
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
