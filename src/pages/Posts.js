import React from "react"

// title
import Title from "../components/Title";

// filter
import Filter from "../components/Filter";

// post
import Post from "../components/Post";

// context
import {CarsContext} from "../context";

class Posts extends React.Component {

    static contextType = CarsContext;

    render() {

        const {sorted: getData} = this.context;

        const getPosts = getData.map( item => {
            return (
                <Post key={item.id} data={item}/>
            );
        })

        return (
            <main>

                <Title title="Cars List"/>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Filter/>
                        </div>

                        {getPosts}
                    </div>
                </div>
            </main>
        )
    }
}

export default Posts;