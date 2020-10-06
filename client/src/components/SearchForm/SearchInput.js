import React from "react";

const SearchInput = React.forwardRef((props, ref) => {
    return (
        <input {...props} ref={ref}></input>
    )
})

export default SearchInput