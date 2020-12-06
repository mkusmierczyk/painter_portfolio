import React from 'react';
import styled from 'styled-components';


function Header() {

    const HeaderTag = styled.header`  
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
    color:white;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 10px;
    &:hover{
        color:red;
    }
    @media (max-width: 800px){
    width:30%
    }
    `

    return (
        <>

            <HeaderTag>
                    <div className="row align">
                        <Name>
                            MICHAL PASTERNAK
                        </Name>
                    
                </div>
            </HeaderTag>
        </>
    );
}

export default Header;
