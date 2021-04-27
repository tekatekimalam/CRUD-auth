const mongoose = require("mongoose");

const dbConnect = () => {
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
};

module.exports = dbConnect;
