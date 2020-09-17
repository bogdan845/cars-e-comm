import React from "react";

// post
import Post from "../components/Post";

// title
import Title from "./Title";

// context
import {CarsContext} from "../context";


class Featured extends React.Component {

    static contextType = CarsContext;

    render() {

        const {featured: getFeatured} = this.context;
        const setFeatured = getFeatured.map(item => {
            return (
                <Post key={item.id} data={item}/>
            )
        })



        return (
            <section>
                <Title title="Featured cars"/>
                <div className="container">
                    <div className="row">
                        {setFeatured}
                    </div>
                </div>
            </section>
        )
    }
}

export default Featured;