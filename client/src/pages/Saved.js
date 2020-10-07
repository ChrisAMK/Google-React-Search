import React, { useEffect, useState } from "react";
import SavedResults from "../components/SavedResults";
import API from "../utils/API";


function Saved() {

    const [books, setBooks] = useState([]);

    const fetchSavedBooks = async () => {
        
        await API.getSavedBooks()
        .then(savedBooks => setBooks(savedBooks))
        .catch(err => console.log(err))
    }

    const deleteBook = async ( _id ) => {
        try {
            await API.removeBook( _id );
            fetchSavedBooks();
        } catch (error) {
            console.log(error);
        }
    }

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