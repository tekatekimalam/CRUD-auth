const express = require("express");
const dotenv = require("dotenv");

const dbConnect = require("./config/dbConfig");
const usersRoute = require("./routes/userRoute");
const bookRoute = require("./routes/bookRoute");
const error = require("./middlewares/errorMiddlewareHandler");

const app = express();
dotenv.config();

// Connect to database
dbConnect();

// ******** MIDDLEWARES ********

// Json parser
app.use(express.json());

// Routes
app.use("/api/users", usersRoute);
app.use("/api/books", bookRoute);

// Error handling
app.use(error.errorMiddleWareHandler);

// ******** SERVER ********
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
