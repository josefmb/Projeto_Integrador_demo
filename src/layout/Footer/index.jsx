import React from "react";
import { Link } from 'react-router-dom';

import "../../styles/FooterStyles/styles.css";
import Container from "../Container";

const Footer = () => {
    return (
        <Container>
        <footer className="footer">
            <ul className="list">
                <li className="item">
                    <a href="">Contato</a>
                </li>
            </ul>
            <p>
                <span>E-Commerce</span> &copy; 2023
            </p>
        </footer>
        </Container>
    );
}

export default Footer;
