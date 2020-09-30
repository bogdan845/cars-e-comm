import React from "react";


const Banner = ({title, subTitle, children}) => {
    return (
        <div className="banner__content ">
            {title ? <h2 className="text-uppercase mb-3">{title}</h2> : ""}
            {subTitle ? <h4 className="mb-5">{subTitle}</h4> : ""}
            {children}
        </div>
    )
}

export default Banner;