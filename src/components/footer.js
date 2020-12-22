import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function Footer() {





    const FooterName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  
  
  
    font-size: 0.6rem;
    width: 100%;
    height: 5vh;
    font-size: 2.5vh;
    color: #ececec;
    background-color: #23232e;
    text-align: center;
    letter-spacing: 0.5ch;
    padding: 2rem 0;
    @media (max-width: 721px){
        display: none;
        }

    `

    return (
        <>
            <FooterName> <span>SilSil 2020</span></FooterName>
        </>
    );
}

export default Footer;
