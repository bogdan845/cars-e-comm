import React from "react";

// hero
import Hero from "../components/Hero";

// banner
import Banner from "../components/Banner";

// about us
import AboutUs from "../components/AboutUs";

// featured posts
import Featured from "../components/Featured";


const Home = () => {
    return (
        <main>

            <Hero>
                <Banner
                    title="Cars for rent"
                    subTitle="som sub"
                    link="cars"
                />
            </Hero>

            <AboutUs/>

            <Featured/>
        </main>
    )
}

export default Home;