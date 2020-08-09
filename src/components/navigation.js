import React, {useState} from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import styled from 'styled-components';


function Navigation() {



    const Nav = styled.nav`
        height:10vh;
        
    `

    return (
        <>
            <Nav className ="col-6">
            <Link to={"/"}>Strona Główna</Link>
            <Link to={"/paintings"}>Galeria</Link>
            <Link to={"/contact"}>Kontakt</Link>
            </Nav>
        </>
    );
}

export default Navigation;
