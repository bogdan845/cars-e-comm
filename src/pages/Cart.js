import React from "react";

// link
import {Link, NavLink} from "react-router-dom";
// cartItem
import CartItem from "../components/CartItem";
// context
import {CarsContext} from "../context";
import Loading from "../components/Loading";


class Cart extends React.Component {
    static contextType = CarsContext;


    render() {
        const {
            posts: getData,
            isLoading,
            totalCost,
            handleClearCart,
        } = this.context;

        const getInCartItems = getData.map(item => {
            return (
                item.inCart ? <CartItem key={item.id} data={item}/> : ""
            )
        });


        return (
            <main className="cart">
                {isLoading ? <Loading/> : ""}

                <div className="container">

                    {totalCost === 0 ?
                        <div className="row ">
                            <div className="col-12 b-not-found">
                                <p>Your cart is empty</p>
                                <Link className="b-link" to="/cars">Back to cars</Link>
                            </div>
                        </div>
                        :
                        getInCartItems
                    }

                    <div className="row">
                        <div className="mt-5 col-12 text-right d-flex flex-column ">
                            <h3 className="mb-4">Total: {totalCost.toLocaleString()}$</h3>

                            {totalCost !== 0 ?
                                <button type="button"
                                        className="b-link cart__clear"
                                        onClick={handleClearCart}
                                >
                                    Clear cart
                                </button> : ""
                            }

                            {totalCost !== 0 ?
                                <NavLink className="b-link cart__link" to="cars">back to cars</NavLink> : ""}
                        </div>
                    </div>

                </div>
            </main>
        )
    }
}

export default Cart;
