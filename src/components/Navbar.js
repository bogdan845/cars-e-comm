import React from "react";
import {Link, useRouteMatch} from "react-router-dom"
import {FaShoppingBag} from "react-icons/fa";

// hook for context
import {useContext} from "react";

// context
import {CarsContext} from "../context";


// active menu item
const OldSchoolMenuLink = ({to, activeOnlyWhenExact, label, onClick, children}) => {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    return (
        <Link className={match ? "b-current-menu-item" : "b-menu-item"}
              to={to}
              onClick={onClick}
        >
            {label}
            {children}
        </Link>
    );
}


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
        <header className="header py-3">

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
                                <li>
                                    <OldSchoolMenuLink
                                        label="Home"
                                        to="/"
                                        onClick={isMobileNav ? openCloseMenu : null}
                                        activeOnlyWhenExact={true}
                                    />
                                </li>

                                <li>
                                    <OldSchoolMenuLink
                                        label="Cars"
                                        to="/cars"
                                        onClick={isMobileNav ? openCloseMenu: null}
                                    />
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-4 text-right">
                        <span className="cart-link">
                            <OldSchoolMenuLink
                                to="/cart"
                                onClick={ isMobileNav && menuOpen ? openCloseMenu : null }
                            >
                                <FaShoppingBag/>
                                <span>{countCartItems}</span>
                            </OldSchoolMenuLink>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export {Navbar, OldSchoolMenuLink}