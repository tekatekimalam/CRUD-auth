const express = require("express");
const asyncHandler = require("express-async-handler");

const Book = require("../model/Book");
const authMiddleware = require("../middlewares/authMiddleware");

const bookRoute = express.Router();

// Create
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

// Read
bookRoute.get(
  "/",
  asyncHandler(async (req, res) => {
    const book = await Book.find({});

    if (book) {
      res.status(200);
      res.send(book);
    } else {
      res.status(500);
      throw new Error("There are no books");
    }
  }),
);

// Update
bookRoute.put(
  "/:id",
  authMiddleware,
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const book = await Book.findById(id);

    if (book) {
      const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });

      res.status(200);
      res.json(updatedBook);
    } else {
      res.status(500);
      throw new Error("Update failed");
    }
  }),
);

// Delete
bookRoute.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    try {
      const book = await Book.findByIdAndDelete(req.params.id);

      res.status(200);
      res.send(book);
    } catch (err) {
      res.json(err);
    }
  }),
);

module.exports = bookRoute;
