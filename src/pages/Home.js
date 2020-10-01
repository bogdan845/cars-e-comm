import React from "react";

// hero
import Hero from "../components/Hero";
// banner
import Banner from "../components/Banner";
// about us
import AboutUs from "../components/AboutUs";
// featured posts
import FeaturedPosts from "../components/FeaturedPosts";
// link
import {Link} from "react-router-dom";
// loading
import Loading from "../components/Loading";
// hook
import {useContext} from "react"
// context
import {CarsContext} from "../context";


const Home = () => {
    const context = useContext(CarsContext);
    const {isLoading, isError} = context;


    return (
        <main>

            {isLoading ? <Loading error={isError}/> : ""}

            <Hero>
                <Banner
                    title="Contrary to popular"
                    subTitle="Ipsum sapien"
                    link="cars page"
                >
                    <Link className="b-link" to="/cars">cars page</Link>
                </Banner>
            </Hero>

            <AboutUs/>

            <FeaturedPosts/>
        </main>
    )
}

export default Home;