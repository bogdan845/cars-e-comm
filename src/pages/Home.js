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


const Home = () => {
    return (
        <main>
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