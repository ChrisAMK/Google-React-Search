import React, { useRef, useState } from "react";
import Results from "../components/Results";
import SearchBtn from "../components/SearchForm/SearchBtn";
import SearchInput from "../components/SearchForm/SearchInput";
import API from "../utils/API";

import "../assets/search.css";


function Saved() {

    const [books, setBooks] = useState([]);

    const inputRef = useRef("");

    const getBook = (query) => {
        API.getBook(query)
        .then(res => setBooks(res.data.items))
        .catch(err => console.log(err));
    }

    const handleSubmit = () => {

        getBook(inputRef.current.value)
        console.log(books)
    }


    return(
        <React.Fragment>
            <div className="row searchBox">
                <div className="col-12">
                    <h5>Book Search</h5>
                    <h6>Book:</h6>
                    <SearchInput ref={inputRef}/>
                    <SearchBtn onClick={handleSubmit}/>
                </div>
            </div>

            <Results books={books}>

                
            
            </Results>
        </React.Fragment>
    )
}

export default Saved;