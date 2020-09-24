import React from "react";

// hook for context
import {useContext} from "react";

// context
import {CarsContext} from "../context";

// link
import {Link} from "react-router-dom";

import {MdShoppingCart} from "react-icons/md";
import {MdRemoveShoppingCart} from "react-icons/md";

const Post = ({data}) => {

    const context = useContext(CarsContext);

    const {
        handleAddToCart,
        handleRemoveFromCart
    } = context;

    return (
        <div className="col-md-4 col-sm-12 mb-5">

            <div className="card h-100 bg-dark border-0 position-relative" style={{}}>
                {data.inCart ?
                    <button
                        type="button"
                        className="cart-btn btn btn-warning rounded-0 btn-outline-0"
                        onClick={ () => {handleRemoveFromCart(data.id)}}
                    >
                        <MdRemoveShoppingCart/>
                    </button>
                    :
                    <button
                        type="button"
                        className="cart-btn btn btn-info rounded-0 btn-outline-0"
                        onClick={ () => {handleAddToCart(data.id)}}
                    >
                        <MdShoppingCart/>
                    </button>
                }
                <Link className="mb-2 zoom-box" to={`cars/${data.slug}`}>
                    <img src={data.images[0]} className="card-image-top img-fluid" alt={data.model}/>
                </Link>


                <div className="card-body text-center">
                    <h5 className="text-light card-title mb-1">{data.mark}:
                        <span className="font-italic font-weight-light">{data.model}</span>
                    </h5>
                </div>

                <div className="border-0 card-footer text-center">
                    <Link className="text-primary text-decoration-none" to={`cars/${data.slug}`}>Read more</Link>
                </div>


            </div>
        </div>
    )
}

export default Post;