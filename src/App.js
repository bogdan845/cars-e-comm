import React from 'react';

// styles
import './App.scss';
// router
import {Switch, Route} from "react-router-dom"
// navbar
import {Navigation} from "./components/Navigation";
// pages
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Single from "./pages/Single";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
// footer
import Footer from "./components/Footer";


function App() {
    return (
        <>
            <Navigation/>
            <Switch>
                <Route exact path="/cars-e-comm" component={Home}/>
                <Route exact path="/cars" component={Posts}/>
                <Route exact path="/cars/:slug" component={Single}/>
                <Route exact path="/cart" component={Cart}/>
                <Route component={NotFound}/>
            </Switch>
            <Footer/>
        </>
    );
}

export default App;
