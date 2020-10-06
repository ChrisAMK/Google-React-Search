import React from "react";
import ResultCard from "./ResultCard"
import "../assets/results.css";


function Results(props) {


    const books = props.books


    const generateResults = (book, key) => {
        return (

            <ResultCard 
                id={book.id}
                author={book.volumeInfo.authors}
                title={book.volumeInfo.title}
                description={book.volumeInfo.description}
                image={book.volumeInfo.imageLinks.thumbnail}
                link={book.volumeInfo.infoLink}
                key={key}

            />
        )
    }


    return(

        <div className="row resultsBox">
            <div className="col-12">
                <h5>Results</h5>
            </div>
            {
                books.map((book, key) => (
                    generateResults(book, key)
                ))
            }
        </div>
    )
}

export default Results