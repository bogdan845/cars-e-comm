import React from "react"

// banner
import Banner from "../components/Banner";
// title
import Title from "../components/Title";
// filter
import Filters from "../components/Filters";
// post
import PostPreview from "../components/PostPreview";
// styled banner
import StyledHero from "../components/StyledHero";
// page image
import pageImg from "../images/cars-page.jpg"
// context
import {CarsContext} from "../context";
// link
import {Link} from "react-router-dom";
// component
import Loading from "../components/Loading";


class Posts extends React.Component {
    static contextType = CarsContext;


    render() {
        const {
            isLoading,
            isError,
            sorted: getData
        } = this.context;
        const getPosts = getData.map( item => {
            return (
                <PostPreview key={item.id} data={item}/>
            );
        })


        return (
            <main>
                {isLoading ? <Loading error={isError}/> : ""}

                <StyledHero className="mb-5" img={pageImg}>
                    <Banner
                        title="Nulla tellus"
                        link="home"
                    >
                        <Link className="b-link" to="/">home page</Link>
                    </Banner>
                </StyledHero>

                <Title title="Cars List"/>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-12">
                                <Filters/>
                            </div>

                            <div className="col-md-9 col-sm-12">
                                {getPosts.length === 0 ?
                                    <div className="col b-not-found">
                                        <p>Sorry but there is no result for your search</p>
                                        <p>Please, change filter settings</p>
                                    </div>
                                    :
                                    <div className="row">
                                        {getPosts}
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default Posts;