import React from 'react';
import './App.scss';

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";


// router
import { Switch, Route } from "react-router-dom"


// navbar
import Navbar from "./components/Navbar";

// pages
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Single from "./pages/Single";
import Cart from "./pages/Cart";



function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cars" component={Posts} />
        <Route exact path="/cars/:slug" component={Single} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </>
  );
}

export default App;
