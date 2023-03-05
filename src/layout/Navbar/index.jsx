import React from "react";
import { Link } from 'react-router-dom';

import Container from "../Container";

import "../../styles/NavbarStyles/styles.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            {/*<Container>*/}
                <ul className="list">
                    <li className="item">
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            {/*</Container>*/}
        </nav>
    );
}

export default Navbar;
