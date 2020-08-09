import React from 'react';
import styled from 'styled-components';
import Navigation from "./navigation";

function Header() {


    const HeaderTag = styled.header`  
    display: flex
    height: 12vh;
    width: 100%;
    color: #0d0d0d;
    .align{
    display: flex;
    align-items: center;
    }
    `;

    const Title = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap');
    font-family: 'Rock Salt', cursive;
    font-weight: bold;
        }
    `;

    return (
        <>

            <HeaderTag>
                <div className="container">
                    <div className="row align">
                        <Title className="col-6">
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
