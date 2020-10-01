import React from "react";
import ResultCard from "../components/ResultCard"
import "../assets/results.css";

function Results() {
    return(

        <div className="row resultsBox">
            <div className="col-12">
                <h5>Results</h5>
                <ResultCard />
            </div>
        </div>
    )
}

export default Results