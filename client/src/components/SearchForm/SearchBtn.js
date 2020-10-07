import React from "react";

const SearchBtn = React.forwardRef((props, ref) => {
    return (
        <button {...props} style={{marginBottom: "10px", marginTop: "10px"}}>Search</button>
    )
})

export default SearchBtn