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


        const {getPostBySlug} = this.context;
        let post = getPostBySlug(this.state.slug);

        if (!post) {
            return (
                <main>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="bg-dark card mt-5 py-4 px-2 text-center">
                                    <h3 className="text-light mb-4">Something goes wrong...</h3>
                                    <Link to="/cars">Back to cars page</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            )
        }

        const {
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
            availability
        } = post;

        return (
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="bg-dark text-light text-justify card my-5 py-4 px-4">
                                <h3 className="text-center text-light card-title mb-4">{mark}: <span
                                    className="font-italic font-weight-light">{model}</span></h3>
                                <img className="mb-4 img-fluid" src={images[0]}/>
                                <p>{description}</p>

                                <div className="text-light text-justify mb-2">
                                    <p><span className="text-info">Engine: </span>{engine ? engine : "Not specified"}</p>
                                    <p><span className="text-info">Horsepower: </span>{horsepower ? horsepower : "Not specified"}</p>
                                    <p><span className="text-info">Torque: </span>{torque ? torque : "Not specified"}</p>
                                    <p><span className="text-info">Acceleration: </span>{acceleration ? acceleration + " (0-60 m/ph)" : "Not specified"}</p>
                                    <p><span className="text-info">Max Speed: </span>{maxSpeed ? maxSpeed + "m/ph" : "Not specified"}</p>
                                    <p><span className="text-info">Transmission: </span> {transmission ? transmission : "Not specified"}</p>
                                </div>

                                <h5 className="mb-0"><span className="text-primary">Availability:</span> {availability ? <span className="text-info">Yes</span> : <span className="text-warning">Not Available</span>}</h5>


                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Single;