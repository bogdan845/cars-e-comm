import React from "react";

// link
import {Link} from "react-router-dom";

const NotFound = () => {
    return (

        <section className="b-section">
            <div className="container">
                <div className="row">
                    <div className="col not-found text-center">
                        <p>Sorry, but page you looking for is not found.</p>
                        <p>Please check URL address.</p>
                        <Link className="b-link" to="/">Back to home</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NotFound;