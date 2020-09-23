import React from "react";
import {Link} from "react-router-dom"
import {FaShoppingBag} from "react-icons/fa";

// hook for context
import {useContext} from "react";

// context
import {CarsContext} from "../context";

// component
const Navbar = () => {

    const context = useContext(CarsContext);

    const {
        countCartItems,
        openCloseMenu,
        menuOpen,
        isMobileNav
    } = context;


    return (
        <header className="header py-2">

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-8 position-static">

                        <button
                            onClick={openCloseMenu}
                            className={menuOpen ? "active menu-icon d-md-none" : "menu-icon d-md-none"}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        <nav className={menuOpen ? "menu active" : "menu"}>
                            <ul className="menu__list">
                                <li className="mb-2">
                                    <Link onClick={isMobileNav ? openCloseMenu : null} to="/">Home</Link>
                                </li>

                                <li className="mb-2">
                                    <Link onClick={isMobileNav ? openCloseMenu : null} to="/cars">Cars</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-4 text-right">
                        <Link className="cart-link" to="/cart">
                            <FaShoppingBag/>
                            <span>{countCartItems}</span>
                        </Link>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar