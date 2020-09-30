import React from "react";

// link
import {Link} from "react-router-dom";
// context
import {CarsContext} from "../context";
import Loading from "../components/Loading";


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
            isLoading,
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
                                    <p className="text-dark">Post you looking was not found</p>
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
            cost,
        } = post;


        return (
            <main className="single py-5">
                {isLoading ? <Loading/> : ""}

                <div className="container">
                    <div className="row">

                        <div className="col">
                            <h3 className="single__title">{mark}: <span className="b-cursive">{model}</span></h3>
                            <img className="img-fluid" src={images[0]} alt={mark + ": " + model}/>

                            <div className="single__post">
                                <p>{description}</p>

                                <ul className="single__tech-params">
                                    <li>
                                        <span>Engine: </span>{engine ? engine : "Not specified"}
                                    </li>
                                    <li>
                                        <span>Horsepower: </span>{horsepower ? horsepower : "Not specified"}
                                    </li>
                                    <li>
                                        <span>Torque: </span>{torque ? torque : "Not specified"}
                                    </li>
                                    <li>
                                        <span>Acceleration: </span>{acceleration ? acceleration + " (0-60 m/ph)" : "Not specified"}
                                    </li>
                                    <li>
                                        <span>Max Speed: </span>{maxSpeed ? maxSpeed + "m/ph" : "Not specified"}
                                    </li>
                                    <li>
                                        <span>Transmission: </span> {transmission ? transmission : "Not specified"}
                                    </li>
                                </ul>

                                {cost ?
                                    <h5 className="single__price">Price:
                                        <span className="font-italic"> {cost.toLocaleString()} $</span>
                                    </h5> : ""
                                }

                                <h5 className="single__availability">Availability:
                                    {isAvailable ?
                                        <span className="font-italic text-primary"> Yes</span>
                                        :
                                        <span className="font-italic text-warning"> Not Available</span>
                                    }
                                </h5>

                                {inCart ?
                                    <button disabled={isAvailable ? false : true}
                                            type="button"
                                            className="single__button--remove"
                                            onClick={() => handleRemoveFromCart(id)}
                                    >
                                        Remove from cart
                                    </button>
                                    :
                                    <button disabled={isAvailable ? false : true}
                                            type="button"
                                            className="single__button--add"
                                            onClick={() => handleAddToCart(id)}
                                    >
                                        Add to cart
                                    </button>
                                }

                                <Link className="single__link" to="/cars">Back to cars</Link>
                                <Link className="single__link" to="/cart">Open cart</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        )
    }
}

export default Single;