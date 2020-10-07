import React from "react";

// Banner component is the big title on every Page
function Banner() {
    return(
        <div className="row">
            <div className="col-12 bannerBox">
                <h1>(React) Google Books Search</h1>
                <h3>Search for and Save Books of Interest</h3>
            </div>
        </div>
    )
}

export default Banner