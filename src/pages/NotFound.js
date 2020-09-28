import React from "react";

// link
import {Link} from "react-router-dom";

const NotFound = () => {
    return (

        <section className="b-section">
            <div className="container">
                <div className="row">
                    <div className="col b-not-found">
                        <p>Page not found. Please, check URL address.</p>
                        <Link className="b-link" to="/">Back to home</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NotFound;