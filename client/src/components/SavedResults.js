import React from "react";
import ResultCard from "./ResultCard";
import "../assets/saved.css";

function SavedComp(props) {

    const books = props.books

    const generateResults = (book, key) => {
        return (
            <ResultCard 
                id={book._id}
                author={book.authors}
                title={book.title}
                description={book.description}
                image={book.image}
                link={book.link}
                key={key}
                saved={true}
                deleteBook={props.deleteBook}
            />
        )
    }


    return(

    
        <div className="row savedBox">
            <div className="col-12">
                <h6>HEY</h6>
                {
                books.map((book, key) => (
                    generateResults(book, key)
                ))
            }
            </div>
        </div>

    )
}

export default SavedComp;