import React from 'react';
import ReactDOM from 'react-dom';

// App
import App from './App';
// service worker
import * as serviceWorker from './serviceWorker';
// router
import {HashRouter as Router} from "react-router-dom";
// context
import {CarsProvider} from "./context";
// scrollToTop
import ScrollToTop from "./components/ScrollToTop";


ReactDOM.render(
    <CarsProvider>
        <Router>
            {/*<React.StrictMode>*/}
                <ScrollToTop/>
                <App/>
            {/*</React.StrictMode>*/}
        </Router>
    </CarsProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
