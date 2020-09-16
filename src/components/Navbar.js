import React from "react";
import { Link } from "react-router-dom"
import { FaShoppingBag } from "react-icons/fa";


const Navbar = () => {
    return (
        <header className="header py-2">

            <button className="nav-btn">
                <span></span>
            </button>


            <div className="row">
                <div className="col-8">
                    <nav className="menu">
                        <ul className="nav menu__list px-2 d-flex flex-column">
                            <li className="mb-2">
                                <Link to="/">Home</Link>
                            </li>

                            <li className="mb-2">
                                <Link to="/cars">Cars</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="col-4">
                    <Link to="/cart"><FaShoppingBag /></Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar