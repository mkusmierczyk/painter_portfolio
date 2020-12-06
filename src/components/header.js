import React from 'react';
import styled from 'styled-components';


function Header() {

    const HeaderTag = styled.header`  
    position: sticky;
    top:0;
    display: flex;
    height: 5rem;
    background-color:  #141418;
    align-content: center;
    @media (max-width: 321px){
    height: 15vh;
    }

    .align{
    display: flex;
    align-items: center;
   
    }
    `

    const Name = styled.a`
    
    color: #ececec;
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    color: #ececec;
    letter-spacing: 0.3ch;
    width: 100%;
    &:hover{
        filter: grayscale(0%) opacity(1);
        color: #b6b6b6;
    }
    @media (max-width: 600px){
    margin-left: 1rem;
    }
    `

    return (
        <>

            <HeaderTag>
                    <div className="row align">
                        <Name href="#">
                            MICHAL PASTERNAK
                        </Name>
                    
                </div>
            </HeaderTag>
        </>
    );
}

export default Header;
