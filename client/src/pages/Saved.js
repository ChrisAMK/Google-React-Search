import React, { useEffect, useState } from "react";
import SavedResults from "../components/SavedResults";
import API from "../utils/API";

// This main component is rendered when the Saved Route is triggered
function Saved() {

    const [books, setBooks] = useState([]);

    // Fetch Saved Book is a async function that performs a query to the mongoDB and then sets those books to the component state
    const fetchSavedBooks = async () => {
        await API.getSavedBooks()
        .then(savedBooks => setBooks(savedBooks))
        .catch(err => console.log(err))
    }

    // DeleteBook is a async function that deletes a book from the mongo database -- These functions must be writed with aysnc and await for
    // Use effect, useEffect doesn't like waiting on promises
    const deleteBook = async ( _id ) => {
        try {
            await API.removeBook( _id );
            fetchSavedBooks();
        } catch (error) {
            console.log(error);
        }
    }

    // UseEffect hook is triggered when the component renders and re-renders when the setBook variable changes
    useEffect(() => {
        fetchSavedBooks();
    }, [setBooks]);

    return (
        <div>
            <SavedResults books={books} deleteBook={deleteBook}/>
        </div>
    )
}

export default Saved;