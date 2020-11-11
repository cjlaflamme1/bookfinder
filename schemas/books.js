import mongoose from 'mongoose';
const { Schema } = mongoose;

const bookSchema = new Schema({
    title: String,
    authors: String,
    description: String,
    image: String,
    link: String
})

const Books = mongoose.model('Books', bookSchema);

export default Books;