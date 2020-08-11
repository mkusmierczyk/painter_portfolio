import React from 'react';
import styled from 'styled-components';

function Title(props) {

console.log(props)
    const Title = styled.h1`
    width: 100%;
    height: 15vh;
    font-size: 5vh;
    color: rgba(219, 219, 219, 1);
    background-color: black;
    text-align: center;
    padding: 2rem 0;
    `

    return (
        <>
        <Title> {props.Name}</Title>
        </>
    );
}

export default Title;
