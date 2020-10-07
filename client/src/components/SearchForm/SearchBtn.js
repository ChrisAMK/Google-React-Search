import React from "react";

// Search button for the Search
const SearchBtn = React.forwardRef((props, ref) => {
    return (
        <button {...props} className="viewBtn" style={{marginBottom: "10px"}}>Search</button>
    )
})

export default SearchBtn