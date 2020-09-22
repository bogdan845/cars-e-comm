import React from "react";

// post
import Post from "../components/Post";

// title
import Title from "./Title";

// context
import {CarsContext} from "../context";

// link
import {Link} from "react-router-dom";

class Featured extends React.Component {

    static contextType = CarsContext;

    render() {

        const {featured: getFeatured} = this.context;
        const setFeatured = getFeatured.map(item => {
            return (
                <Post key={item.id} data={item}/>
            )
        });


        return (
            <section className="b-section featured">
                <Title title="Featured cars"/>
                <div className="container">
                    <div className="row">
                        {setFeatured}
                        <div className="col text-center">
                            <Link className="b-link" to="/cars">Go to cars page</Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Featured;