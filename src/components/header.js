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
    .align{
    display: flex;
    align-items: center;
    justify-content: space-between;
    }
    `;

    const Title = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap');
    font-family: 'Rock Salt', cursive;
    font-weight: bold;
    width: 50%;
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
                        <Title >
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
