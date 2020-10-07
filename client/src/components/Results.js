import React from "react";
import ResultCard from "./ResultCard"

function Results(props) {

    // Generate Results is a function that returns the Result Card multiple times with the infomation of each array item
    const generateResults = (book, key) => {
        return (
            <ResultCard 
                id={book.id}
                author={(!("authors" in book.volumeInfo) ? ["No Authors"] : book.volumeInfo.authors)}
                title={book.volumeInfo.title}
                description={book.volumeInfo.description}
                image={(!("imageLinks" in book.volumeInfo) ? "https://via.placeholder.com/150" : book.volumeInfo.imageLinks.smallThumbnail)}
                link={book.volumeInfo.infoLink}
                key={key}
            />
        )
    }

    return(

        <div className="row resultsBox">
            <div className="col-12">
                <h5 className="results">Results</h5>
            </div>
            {
                props.books.map((book, key) => (
                    generateResults(book, key)
                ))
            }
        </div>
    )
}

export default Results