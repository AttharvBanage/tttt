const axios = require('axios');

const baseURL = "http://localhost:3000";

// Get all books
async function getAllBooks() {
    try {
        const response = await axios.get(`${baseURL}/books`);
        console.log(response.data);
    } catch (error) {
        console.log(error.message);
    }
}

// Get book by ISBN
async function getBookByISBN(isbn) {
    try {
        const response = await axios.get(`${baseURL}/books/ISBN/${isbn}`);
        console.log(response.data);
    } catch (error) {
        console.log(error.message);
    }
}

// Get books by Author
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(`${baseURL}/books/author/${author}`);
        console.log(response.data);
    } catch (error) {
        console.log(error.message);
    }
}

// Get books by Title
async function getBooksByTitle(title) {
    try {
        const response = await axios.get(`${baseURL}/books/title/${title}`);
        console.log(response.data);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle
};
