const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
    title: String,
    authors: String,
    description: String,
    image: String,
    link: String
})

const Books = mongoose.model('Books', bookSchema);

module.exports = Books;