const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating a new Book Schema for mongoose
const BookSchema = new Schema({
    _id: { type: String },
    authors: { type: Array },
    description: { type: String },
    image: { type: String },
    link: { type: String },
    title: { type: String }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;