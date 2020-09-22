import React from "react";

// link
import {Link} from "react-router-dom";

const Banner = ({ title, subTitle, link}) => {

    return (
            <div className="banner__content text-center text-light">
                <h2 className="banner__title mb-3">{title}</h2>
                <h4 className="banner__sub mb-5">{subTitle}</h4>

                { link ?
                    <Link className="b-link" to={link === "home" ? "/" : link}>{link === "home" ? "back to home" : link}</Link> :
                    ""
                }
            </div>
    )
}

export default Banner;