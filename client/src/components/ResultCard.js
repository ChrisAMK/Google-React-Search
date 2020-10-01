import React from "react";
import "../assets/resultCard.css"

function ResultCard() {
    return(

        <div className="resultCardBox">
            <button className="viewBtn">View</button><button className="saveBtn">Save</button>
            <h5 className="cardTitle">Card Title</h5>
            <h6 className="cardSum">Card Summary</h6>
            <div className="row">
                <div className="col-3">
                    <p>Image Image Image Image Image Image Image Image Image Image Image Image Image Image Image Image</p>
                </div>
                <div className="col-9">
                    <p>Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph Paragraph </p>
                </div>
            </div>
        </div>
    )
}

export default ResultCard;