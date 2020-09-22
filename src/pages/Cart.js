import React from "react";

import {FaPlusSquare} from "react-icons/fa";
import {FaMinusSquare} from "react-icons/fa";

// link
import {Link} from "react-router-dom";

// context
import {CarsContext} from "../context";

class Cart extends React.Component {

    static contextType = CarsContext;

    render() {

        const {
            posts: getData,
            totalCost,
            handleAddQuantity,
            handleRemoveQuantity
        } = this.context;



        const getInCartItems = getData.map(item => {
            if (item.inCart === true) {
                return (
                    <div key={item.id} className="col-12 col-sm-12 mb-4">
                        <div className="row align-items-center">
                            <div className="col-md-3">
                                <img src={item.images[0]} alt={item.mark + ":" + item.model} className="img-fluid"/>
                            </div>
                            <div className="col-md-3 col-sm-12">
                                <h4 className="text-primary">{item.mark}: <span
                                    className="font-weight-light font-italic">{item.model}</span></h4>
                            </div>
                            <div className="col-md-2 col-sm-12">

                                <div className="border d-inline-block h5">
                                    <button
                                        type="button"
                                        className="btn btn-warning border-0 rounded-0"
                                        onClick={ () => handleRemoveQuantity(item.id) }
                                    >
                                        -
                                    </button>
                                    <span className="px-3 text-primary">{item.quantity}</span>
                                    <button
                                        type="button"
                                        className="btn btn-primary border-0 rounded-0"
                                        onClick={ () => handleAddQuantity(item.id)}
                                    >
                                        +
                                    </button>
                                </div>

                            </div>
                            <div className="col-md-2 col-sm-12">
                                <h4 className="text-primary">{item.cost}$</h4>
                            </div>
                            <div className="col-md-2 col-sm-12">
                                <h4 className="text-primary">{item.total}$</h4>
                            </div>
                        </div>
                    </div>
                )
            }
        })


        return (
            <main>
                <section>
                    <div className="container">
                        <div className="row">
                            {totalCost === 0 ?
                                <div className="col-12 text-center text-warning h4">
                                    <p>Sorry, but your cart is empty...</p>
                                    <Link className="b-link" to="/cars">Back to cars</Link>
                                </div>
                                :
                                getInCartItems
                            }

                            <div className="mt-5 col-12 text-right text-warning">
                                <h3>Total: {totalCost}$</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default Cart;