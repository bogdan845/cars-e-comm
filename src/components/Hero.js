import React from "react"

const Hero = ({children, heroStyle}) => {
    return (
        <section className={heroStyle}>
            {children}
        </section>
    )
}

// setting default props if we forget pass className
Hero.defaultProps = {
    heroStyle: "hero-home"
}

export default Hero;