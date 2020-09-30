import React from "react";

// hook
import {useContext} from "react"
// icon
import {FaTrashAlt} from "react-icons/fa";
// link
import {Link} from "react-router-dom";
// context
import {CarsContext} from "../context";


const CartItem = ({data}) => {
    const context = useContext(CarsContext);
    const {
        handleRemoveFromCart,
        handleIncreaseAmount,
        handleDecreaseAmount
    } = context;


    return (
        <div className="row align-items-center mb-4">

            <div className="col-lg-1 col-md-1 order-md-1 col-12 order-5 text-md-center text-right">
                <button type="button"
                        className="cart__remove"
                        onClick={() => handleRemoveFromCart(data.id)}
                >
                    <FaTrashAlt/>
                </button>
            </div>

            <div className="col-lg-3 col-md-3 order-md-2 col-12 order-2">
                <Link className="cart__item-link" to={`cars/${data.slug}`}>
                    <img className="img-fluid"
                         src={data.images[0]}
                         alt={data.model + data.mark}
                    />
                </Link>
            </div>

            <div className="col-lg-4 col-md-3 order-md-3 col-12 order-1">
                <h5 className="cart__title">{data.mark}: <span className="b-cursive">{data.model}</span></h5>
            </div>

            <div className="col-lg-2 col-md-2 order-md-4 col-5 order-3">
                <div className="cart__amount-btns">
                    <button type="button"
                            className="cart__increase"
                            onClick={ () => handleDecreaseAmount(data.id)}
                    >-</button>
                    <span>{data.amount}</span>
                    <button type="button"
                            className="cart__increase"
                            onClick={ () => handleIncreaseAmount(data.id)}>+</button>
                </div>
            </div>

            <div className="col-lg-2 col-md-3 order-md-5 col-7 order-4 text-right">
                <h6>Unit: <span>{data.cost.toLocaleString()}$</span></h6>
                <h6>Total: <span>{data.total.toLocaleString()}$</span></h6>
            </div>

        </div>
    );
}

export default CartItem;