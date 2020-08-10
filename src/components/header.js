import React from 'react';
import styled from 'styled-components';
import Navigation from "./navigation";

function Header() {


    const HeaderTag = styled.header`  
  
    display: flex;
   flex-wrap: wrap;
    height: 10vh;
    width: 100%;
    color: #0d0d0d;
    @media (max-width: 321px){
    height: 15vh;
    }
    .align{
    display: flex;
    align-items: center;
    justify-content: space-between;
    }
    `;

    const Title = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap');
    font-family: 'Rock Salt', cursive;
    color: #0d0d0d;
    font-size: 1.5rem;
    font-weight: bold;
    width: 50%;
    margin: 10px;
    @media (max-width: 800px){
    width:30%
    }
        }
    `;

    return (
        <>

            <HeaderTag>
                <div className="container">
                    <div className="row align">
                        <Title>
                            Michał Pasternak
                        </Title>
                        <Navigation/>
                    </div>
                </div>
            </HeaderTag>
        </>
    );
}

export default Header;
