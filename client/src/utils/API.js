import axios from "axios";

export default {
    // Returns the result of a get request to the Google Books API
    getBook: (query) => {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    },

    // Performs a delete request to the server with an to identify which book is to be deleted
    removeBook: (id) => {
        return axios.delete("/api/books/" + id).then(result => result.data);
    },

    // Performs a post request to the server to save the data of a book you want to save
    saveBook: (book) => {
        return axios.post("/api/books", book).then(result => result.data);
    },

    // Performs a get request to the server to get all the saved books in the database
    getSavedBooks: () => {
        return axios.get("/api/books").then(result => result.data);
    }

}