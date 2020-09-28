import React from "react";

// link
import {Link} from "react-router-dom";

// context
import {CarsContext} from "../context";

class Single extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug
        }
    }

    static contextType = CarsContext;

    render() {


        const {
            getPostBySlug,
            handleAddToCart,
            handleRemoveFromCart
        } = this.context;
        let post = getPostBySlug(this.state.slug);

        if (!post) {
            return (
                <main>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="b-not-found">
                                    <p className="text-dark">Something goes wrong...</p>
                                    <Link className="b-link" to="/cars">Back to cars page</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            )
        }

        const {
            id,
            mark,
            model,
            images,
            description,
            engine,
            horsepower,
            torque,
            acceleration,
            maxSpeed,
            transmission,
            isAvailable,
            inCart,
        } = post;


        return (
            <main className="single py-5">
                <div className="container">
                    <div className="row">
                        <div className="col">

                            <h3 className="single__title">{mark}: <span className="">{model}</span></h3>
                            <img className="img-fluid" src={images[0]}/>
                            <div className="single__post">
                                <p>{description}</p>

                                <ul className="single__tech-params">
                                    <li>
                                        <span className="">Engine: </span>{engine ? engine : "Not specified"}
                                    </li>
                                    <li>
                                        <span
                                            className="">Horsepower: </span>{horsepower ? horsepower : "Not specified"}
                                    </li>
                                    <li>
                                        <span className="">Torque: </span>{torque ? torque : "Not specified"}
                                    </li>
                                    <li>
                                        <span
                                            className="">Acceleration: </span>{acceleration ? acceleration + " (0-60 m/ph)" : "Not specified"}
                                    </li>
                                    <li>
                                        <span
                                            className="">Max Speed: </span>{maxSpeed ? maxSpeed + "m/ph" : "Not specified"}
                                    </li>
                                    <li>
                                        <span
                                            className="">Transmission: </span> {transmission ? transmission : "Not specified"}
                                    </li>
                                </ul>


                                {inCart ?
                                        <button
                                            disabled={isAvailable ? false : true}
                                            type="button"
                                            className="single__button--remove"
                                            onClick={() => handleRemoveFromCart(id)}
                                        >
                                            Remove from cart
                                        </button> :

                                        <button
                                            disabled={isAvailable ? false : true}
                                            type="button"
                                            className="single__button--add"
                                            onClick={() => handleAddToCart(id)}
                                        >
                                            Add to cart
                                        </button>
                                }


                                <h5 className="single__availability">
                                    Availability:
                                    {isAvailable ?
                                        <span className="text-primary"> Yes</span> :
                                        <span className="text-warning"> Not Available</span>
                                    }
                                </h5>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Single;