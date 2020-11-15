import axios from 'axios';
require('dotenv').config();

export default {
    searchByTitle: (searchTerm) => {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}+intitle`)
    },
    searchByAuthor: (searchTerm) => {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}+inauthor`)
    },
    addNewBook: (book) => {
        return axios.post("/api/books", book);
    },
    searchByID: (id) => {
        return axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
    },
    getSavedBooks: () => {
        return axios.get("/api/books");
    }
}