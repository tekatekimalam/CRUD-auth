const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useFindAndModify: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
    })
    .then(() => console.log("Database connected"))
    .catch(err => console.log(err));
};

module.exports = dbConnect;
