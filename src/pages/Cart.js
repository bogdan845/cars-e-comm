import React from "react";

import {FaPlusSquare} from "react-icons/fa";
import {FaMinusSquare} from "react-icons/fa";

// link
import {Link} from "react-router-dom";

// cartItem
import CartItem from "../components/CartItem";

// context
import {CarsContext} from "../context";

class Cart extends React.Component {

    static contextType = CarsContext;

    render() {

        const {
            posts: getData,
            totalCost,
        } = this.context;


        const getInCartItems = getData.map(item => {

            if (item.inCart) {
                return (
                    <CartItem key={item.id} data={item}/>
                );
            }
        });

        return (
            <main>
                <section className="cart">
                    <div className="container">
                        {/*{totalCost === 0 ?*/}
                        {/*    <div className="row ">*/}
                        {/*        <div className="col-12 b-not-found">*/}
                        {/*            <p>Your cart is empty</p>*/}
                        {/*            <Link className="b-link" to="/cars">Back to cars</Link>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    :*/}
                        {/*    getInCartItems*/}
                        {/*}*/}

                        {getInCartItems}
                        <div className="mt-5 col-12 text-right text-warning">
                            <h3>Total: {totalCost}$</h3>
                        </div>

                    </div>
                </section>
            </main>
        )
    }
}

export default Cart;
