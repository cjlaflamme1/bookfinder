const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
    id: String,
    title: String,
    authors: [String],
    description: String,
    imageLinks: {}, 
    infoLink: String,
    subtitle: String
})

const Books = mongoose.model('Books', bookSchema);

module.exports = Books;