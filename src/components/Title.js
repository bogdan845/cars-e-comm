import React from "react";

const Title = ({title}) => {

    if (!title) {
        return ("")
    }

    return (
        <h2 className="b-title mb-5">
            <span>{title}</span>
        </h2>
    )
}

export default Title;