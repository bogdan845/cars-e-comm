import styled from "styled-components";

// default img
// import defaultImg from "../images/front-image.jpg";


/*example*/
// const red = "#f15025";
//
// const StyledHero = styled.button`
//     color: ${red};
//     background: green;
// `;

const info = "#17A2B8";
const dark = "#343A40";

const StyledHero = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    background-blend-mode: overlay;
    background: center  no-repeat url(${props => props.img}), linear-gradient(to right, ${info}, ${dark} );
    background-size: cover;
    min-height: 70vh;
`


export default StyledHero;