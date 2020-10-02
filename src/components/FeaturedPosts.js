import React from "react";

// post
import PostPreview from "./PostPreview";
// title
import Title from "./Title";
// context
import {CarsContext} from "../context";
// link
import {NavLink} from "react-router-dom";


class FeaturedPosts extends React.Component {
    static contextType = CarsContext;


    render() {
        const {featured: getFeatured} = this.context;
        const setFeatured = getFeatured.map(item => {
            return (
                <PostPreview key={item.id} data={item}/>
            )
        });


        return (
            <section className="b-section featured">
                <Title title="Featured cars"/>
                <div className="container">
                    <div className="row">
                        {setFeatured}
                        <div className="col-12 text-center">
                            <NavLink className="b-link" to="/cars">cars page</NavLink>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default FeaturedPosts;