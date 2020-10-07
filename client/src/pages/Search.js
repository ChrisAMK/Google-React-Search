import React, { useRef, useState } from "react";
import Results from "../components/Results";
import SearchBtn from "../components/SearchForm/SearchBtn";
import SearchInput from "../components/SearchForm/SearchInput";
import API from "../utils/API";

// Renders when the user navigates to the Search page
function Search() {

    // setting up state for the searched books
    const [books, setBooks] = useState([]);

    // useRef allows us to get the value of the input from the user and search with that value
    const inputRef = useRef("");

    // getBook function uses the API get book function that uses the Google Books API and searches with the useRef value that the user sets
    const getBook = (query) => {
        API.getBook(query)
        .then(res => setBooks(res.data.items))
        .catch(err => console.log(err));
    }

    // Once the submit button is pressed, the handle submit function is triggered, it calls the getbook function with UseRefs value as parameters
    const handleSubmit = () => {
        getBook(inputRef.current.value)
    }

    return(
        <React.Fragment>
            <div className="row searchBox">
                <div className="col-12">
                    <h5 className="bookSearch">Book Search</h5>
                    <h6>Book:</h6>
                    <SearchInput ref={inputRef}/>
                    <SearchBtn onClick={handleSubmit}/>
                </div>
            </div>
            <Results books={books} />
        </React.Fragment>
    )
}

export default Search;