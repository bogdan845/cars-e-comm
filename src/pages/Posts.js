import React from "react"

// banner
import Banner from "../components/Banner";

// title
import Title from "../components/Title";

// filter
import Filter from "../components/Filter";

// post
import Post from "../components/Post";

// styled banner
import StyledHero from "../components/StyledHero";

// page image
// import pageImg from "../images/cars-page.jpg"
import pageImg from "../images/cars-page.jpg"

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

                <StyledHero className="mb-5" img={pageImg}>
                    <Banner
                        title="Provided cars"
                        link="home"
                    />
                </StyledHero>

                <Title title="Cars List"/>

                <section className="b-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-12">
                                <Filter/>
                            </div>

                            <div className="col-md-9 col-sm-12">
                                <div className="row">
                                    {getPosts.length === 0 ?
                                        <div className="col not-found">
                                            <p>Sorry, but there is no results were found for your search</p>
                                            <p>Please, change filter settings</p>
                                        </div>
                                        :
                                        getPosts
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default Posts;