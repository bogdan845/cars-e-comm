import React from "react";

const Title = ({title}) => {

    if (!title) {
        return (
            <>
            </>
        )
    }

    return (
        <h2 className="text-center text-light mb-4">{title}</h2>
    )
}

export default Title;