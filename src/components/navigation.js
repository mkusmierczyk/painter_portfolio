import React, {useState} from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import styled from 'styled-components';
import {Navicon} from '@styled-icons/evil/Navicon'
import Blue from '../assets/splash_blue.png';
import Red from '../assets/splash_red.svg';
import Pink from '../assets/splash_pink.svg'
import Splash from '../assets/icons8-splash-50.png'


function Navigation() {

    const [menuDisplay, setMenuDisplay] = useState("none")

    const menuOnClick = () => {
        setMenuDisplay("flex")
    }
    const menuOnClickClose = () => {
        setMenuDisplay("none")
    }


    const Nav = styled.nav`
    width: 50%;
    height:10vh;
    display: flex;
    justify-content: flex-end;  
    @media (max-width: 600px){
    width: 70%;
    display: ${menuDisplay};
    position: absolute;
  }     
             
  }       

    ul{
    display:flex;
    align-self: center;
    margin: 3rem;
     @media (max-width: 600px){
       position: relative;
       top:33vh;
       flex-direction: column;
       height: 104vh;
       width: 100%;
       background-color: #58595b;
       margin: 0;
  }     
  li{
    @media (max-width: 600px){
       margin: 2px;
  }     
  }   
    }
    li:last-of-type a{
    border-right: 1px solid black;
    @media (max-width: 600px){
    border: 0px    
  }     
   
    }
    a{
    color:black;
    padding:20px 20px 20px 20px;
    border-left: 1px solid black;
    text-decoration: none;
     @media (max-width: 600px){
     margin-left: 2rem;
    padding:50px 60px 50px 60px;
    color: white;
    font-weight: bold;
    font-size: 2rem;
    border: 0px;
    
  }
    }
    
    
    li:nth-of-type(1) a{
      @media (max-width: 600px){
       position: relative;
       top: 10vh;
       
        background: url(${Blue}) no-repeat ;
        background-size: 130px 130px;
  }
    &:hover{
    background: url(${Blue}) no-repeat ;
        background-size: auto;
    }}
    
    
    li:nth-of-type(2) a{
     @media (max-width: 600px){
        position: relative;
        top: 30vh;
        background: url(${Red}) no-repeat ;
        background-size: 130px 120px;
  } 
    &:hover{
      background: url(${Red}) no-repeat center ;
    }  
    }
    
    
    li:nth-of-type(3) a{
    
    @media (max-width: 600px){
         position: relative;
        top: 50vh;
        background: url(${Pink}) no-repeat ;
        background-size: 130px 120px;
  } 
    &:hover{
    background: url(${Pink}) no-repeat left ;
    }    
    }
    
    li:nth-of-type(4) a{
    @media (max-width: 600px){
         position: relative;
        top: 70vh;
        background: url(${Splash}) no-repeat ;
        background-size: 130px 120px;
  } 
    
    &:hover{
    background: url(${Splash}) no-repeat right ;
    }}

    `
    const NavIcon = styled(Navicon)`
   height:48px;
   width: 48px;
   display: none;
   @media (max-width: 600px){
   display:block;
  }
    `
    const CloseMenu = styled.span`
     display: none;
       @media (max-width: 800px){
    display: block;
    }
        
    `

    return (
        <>
            <Nav>

                <ul>
                    <li><Link to={"/"}>Start</Link></li>
                    <li><Link to={"/paintings"}>Galeria</Link></li>
                    <li><Link to={"/paintings"}>Wnętrza</Link></li>
                    <li><Link to={"/contact"}>Kontakt</Link></li>
                </ul>
                <CloseMenu onClick={menuOnClickClose}> X</CloseMenu>
            </Nav>

            <NavIcon onClick={menuOnClick}/>
        </>
    );
}

export default Navigation;
