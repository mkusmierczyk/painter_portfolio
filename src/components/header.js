import React from 'react';
import styled from 'styled-components';
import Navigation from "./navigation";

function Header() {


    const HeaderTag = styled.header`  
    display: flex
    height: 12vh;
    width: 100%;
    color: #0d0d0d;
    `;

    const Title = styled.h1`
     
    `;

    const TitleSpan = styled.span`
        height: 32px;
        width:  32px;
        border: 2px solid black;
    `

    return (
        <>

            <HeaderTag >
                <div className="container">
                    <div className="row">
                <Title className="col-6">
                    <TitleSpan>MP</TitleSpan>
                    Michał Pasternak
                </Title>
                <Navigation />
                    </div>
                </div>
            </HeaderTag>
        </>
    );
}

export default Header;
