import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function Title(props) {

    const [hide, setHide] = useState("flex")

    useEffect(() => {
        if (props.Name === "STRONA GŁÓWNA") {
            setHide("none")
        } else { setHide("flex") }

    }, [props.Name]);




    const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 12vh;
    font-size: 2.5vh;
    color: #ececec;
    background-color: #23232e;
    text-align: center;
    letter-spacing: 0.5ch;
    padding: 2rem 0;
    @media (max-width: 321px){
        display: ${hide};
        }

    `

    return (
        <>
            <Title> <h1>{props.Name}</h1></Title>
        </>
    );
}

export default Title;
