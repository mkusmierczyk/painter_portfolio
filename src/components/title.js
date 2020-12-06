import React from 'react';
import styled from 'styled-components';

function Title(props) {


    const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15vh;
    font-size: 2.5vh;
    color: rgba(219, 219, 219, 1);
    background-color: #23232e;
    text-align: center;
    padding: 2rem 0;
    `

    return (
        <>
            <Title> <h1>{props.Name}</h1></Title>
        </>
    );
}

export default Title;
