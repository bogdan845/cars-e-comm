import React from "react";

// hook
import {useContext} from "react";
// prop types
import PropTypes from "prop-types";
// context
import {CarsContext} from "../context";
// link
import {Link} from "react-router-dom";
// icons
import {MdShoppingCart} from "react-icons/md";
import {MdRemoveShoppingCart} from "react-icons/md";


const PostPreview = ({data}) => {
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
                        onClick={() => handleRemoveFromCart(data.id)}
                    >
                        <MdRemoveShoppingCart/>
                    </button>
                    :
                    <button
                        type="button"
                        disabled={data.isAvailable ? false : true}
                        className="post-box__add"
                        onClick={() => handleAddToCart(data.id)}
                    >
                        {data.isAvailable ? <MdShoppingCart/> : "Not available"}
                    </button>
                }

                <Link className="post-box__img-wrap" to={`/cars/${data.slug}`}>
                    <img src={data.images[0]} className="post-box__img" alt={data.model}/>
                </Link>

                <h5 className="post-box__title">{data.mark}:
                    <span className="b-cursive"> {data.model}</span>
                </h5>

                <Link className="post-box__link" to={`cars/${data.slug}`}>Read more</Link>

            </div>
        </div>
    )
}


PostPreview.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        isAvailable: PropTypes.bool.isRequired,
        featured: PropTypes.bool.isRequired,
        inCart: PropTypes.bool.isRequired,
        amount: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        cost: PropTypes.number.isRequired
    })
}

export default PostPreview;