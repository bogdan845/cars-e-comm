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
        <div className="col-lg-4 col-md-6 col-sm-12 mb-5">

            <div className={data.inCart ? "post-box in-cart" : "post-box"}>
                {data.inCart ?
                    <button
                        type="button"
                        className="post-box__remove"
                        onClick={ () => handleRemoveFromCart(data.id)}
                    >
                        <MdRemoveShoppingCart/>
                    </button>
                    :
                    <button
                        type="button"
                        disabled={data.isAvailable ? false : true}
                        className="post-box__add"
                        onClick={ () => handleAddToCart(data.id)}
                    >
                        {data.isAvailable ? <MdShoppingCart/> : "Not available"}
                    </button>
                }
                <Link className="post-box__img-wrap" to={`cars/${data.slug}`}>
                    <img src={data.images[0]} className="post-box__img" alt={data.model}/>
                </Link>

                <h5 className="post-box__title">{data.mark}:
                    <span className="post-box__title-inner"> {data.model}</span>
                </h5>

                <Link className="post-box__link" to={`cars/${data.slug}`}>Read more</Link>

            </div>
        </div>
    )
}

export default Post;