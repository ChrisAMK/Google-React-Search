import React from "react";
import API from "../utils/API";

function ResultCard(props) {

    // SaveBook uses the API saveBook function to store the book in our MongoDB database
    const saveBook = () => {
        API.saveBook(bookData)
        .then(savedBooks => console.log(savedBooks))
        .catch(err => console.log(err))
    }

    // This function is checks if the Card component is being rendered for a saved Book or searched book
    // If is is a saved book, the code for the save button is replaced with the delete button
    const buttonChecker = () => {
        if (props.saved) {
            let buttons = <React.Fragment><button className="viewBtn"><a href={props.link} target="_blank" rel="noopener noreferrer">View</a></button><button className="saveBtn" onClick={() => props.deleteBook(bookData._id)}>Delete</button></React.Fragment>
            return buttons
        } else {
            let buttons = <React.Fragment><button className="viewBtn"><a href={props.link} target="_blank" rel="noopener noreferrer">View</a></button><button className="saveBtn" onClick={saveBook}>Save</button></React.Fragment>
            return buttons
        }
    }
    // creating a variable to hold the return value of buttonChecker to be used in JSX
    const JsxBtns = buttonChecker()
    
    // Creating a const for easy access to send data to the Database
    const bookData = {
        _id: props.id,
        title: props.title,
        authors: props.author,
        link: props.link,
        image: props.image,
        description: props.description
    }

    return(

        <div className="resultCardBox">
            {JsxBtns}
            <h5 className="cardTitle">{props.title}</h5>
            <h6 className="cardSum">{props.author.map(author => `${author}, `)}</h6>
            <div className="row">
                <div className="col-3">
                    <img src={props.image} alt="" className="cardImage"></img>
                </div>
                <div className="col-9">
                <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ResultCard;