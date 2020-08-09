import React, {useState} from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import styled from 'styled-components';
import  Blue from '../assets/splash_blue.png';
import Red from '../assets/splash_red.svg';
import Pink from '../assets/splash_pink.svg'
import Splash from '../assets/icons8-splash-50.png'





function Navigation() {

    const Nav = styled.nav`
    height:10vh;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;  
    ul{
    display:flex;
    align-self: center;
    margin: 3rem;}
    
    }
    li:last-of-type a{
    border-right: 1px solid black;
    }
    a{
    color:black;
    padding:20px 20px 20px 20px;
    border-left: 1px solid black;
    text-decoration: none;
    }
    li:nth-of-type(1) a:hover{
    background: url(${Blue}) no-repeat ;
    background-size: auto;

    }
    li:nth-of-type(2) a:hover{
      background: url(${Red}) no-repeat center ;
    }   
    li:nth-of-type(3) a:hover{

    background: url(${Pink}) no-repeat right ;
    }    
    li:nth-of-type(4) a:hover{
    background: url(${Splash}) no-repeat ;
    }
    `

    return (
        <>
            <Nav className="col-6">
                <ul>
                    <li><Link to={"/"}>Strona Główna</Link></li>
                    <li><Link to={"/paintings"}>Galeria</Link></li>
                    <li><Link to={"/paintings"}>Wnętrza</Link></li>
                    <li><Link to={"/contact"}>Kontakt</Link></li>
                </ul>
            </Nav>
        </>
    );
}

export default Navigation;
