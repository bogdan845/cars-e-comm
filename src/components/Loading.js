import React from "react"


const Loading = ({error}) => {
    return (
        <div className="loading">
            <div className="loading__box">
                {error ?
                    <h4>Something goes wrong</h4>
                    :
                    <h4>Loading</h4>
                }
            </div>
        </div>
    );
}

export default Loading;