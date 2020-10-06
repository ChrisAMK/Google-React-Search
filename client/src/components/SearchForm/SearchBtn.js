import React from "react";

const SearchBtn = React.forwardRef((props, ref) => {
    return (
        <button {...props}>Search</button>
    )
})

export default SearchBtn