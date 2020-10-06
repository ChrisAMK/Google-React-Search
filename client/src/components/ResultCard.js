import React from "react";
import "../assets/resultCard.css";
import API from "../utils/API";

function ResultCard(props) {

    const saveBook = () => {
        API.saveBook(bookData)
        .then(savedBooks => console.log(savedBooks))
        .catch(err => console.log(err))
    }

    console.log(props)

    const buttonChecker = () => {

        if (props.saved) {
            let buttons = <React.Fragment><button className="viewBtn"><a href={props.link} target="_blank" rel="noopener noreferrer">View</a></button><button className="saveBtn" onClick={() => props.deleteBook(bookData._id)}>Delete</button></React.Fragment>
            return buttons
        } else {
            let buttons = <React.Fragment><button className="viewBtn"><a href={props.link} target="_blank" rel="noopener noreferrer">View</a></button><button className="saveBtn" onClick={saveBook}>Save</button></React.Fragment>
            return buttons
        }
    }

    const JsxBtns = buttonChecker()

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
            <h6 className="cardSum">{props.author}</h6>
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