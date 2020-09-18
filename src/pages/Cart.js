import React from "react";

import {FaPlusSquare} from "react-icons/fa";
import {FaMinusSquare} from "react-icons/fa";


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

        // const getInCartItems = getData.filter(item => item.inCart === true);

        const getInCartItems = getData.map(item => {
            if (item.inCart === true) {
                return (
                    <div key={item.id} className="col-12 col-sm-12">
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
                                <h4 className="text-primary">{item.cost}</h4>
                            </div>
                            <div className="col-md-2 col-sm-12">
                                <h4 className="text-primary">{item.total}</h4>
                            </div>
                        </div>
                    </div>
                )
            }
        })


        return (
            <main>
                <div className="container">
                    <div className="row">
                        {getInCartItems}
                    </div>
                </div>

                <h3>{totalCost}</h3>
            </main>
        )
    }
}

export default Cart;