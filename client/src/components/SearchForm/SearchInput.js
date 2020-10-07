import React from "react";

// Search input for the user to search
const SearchInput = React.forwardRef((props, ref) => {
    return (
        <input {...props} ref={ref}></input>
    )
})

export default SearchInput