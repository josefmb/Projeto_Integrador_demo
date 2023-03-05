import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

import Navbar from '../../layout/Navbar';
import Footer from '../../layout/Footer';

import Container from "../../layout/Container";

import "../../styles/HomeStyles/styles.css";

const HomePage = () => {
    const { authenticated, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }

    return (
        <>
            <Navbar/>

            <Container>
                <h1>Home Page</h1>
                <button onClick={ handleLogout }>Logout</button>
                <p>{ String(authenticated) }</p>
            </Container>
            
            <Footer/>
        </>
    );
};

export default HomePage;