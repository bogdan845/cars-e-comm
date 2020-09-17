import React from "react";

import {Link} from "react-router-dom";

const Post = ({data}) => {
    return (
        <div className="col-md-4 col-sm-12 mb-4">
            <div className="border-primary card h-100 bg-dark pt-3 pb-3 px-2">
                <Link className="mb-4" to={`cars/${data.slug}`}>
                    <img src={data.images[0]} className="card-image-top img-fluid" alt={data.model}/>
                </Link>

                <h4 className="mb-5 text-primary text-center card-title">{data.mark}: <span className="font-italic font-weight-light">{data.model}</span></h4>


                <Link className="rounded post-link text-decoration-none" to={`cars/${data.slug}`}>Read more</Link>


            </div>
        </div>
    )
}

export default Post;