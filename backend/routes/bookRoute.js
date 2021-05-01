const express = require("express");
const asyncHandler = require("express-async-handler");

const Book = require("../model/Book");

const bookRoute = express.Router();

bookRoute.post(
  "/",
  asyncHandler(async (req, res) => {
    const book = await Book.create(req.body);

    if (book) {
      res.status(200);
      res.send(book);
    } else {
      res.status(500);
      throw new Error("Book cannot created");
    }
  }),
);

module.exports = bookRoute;
