import React from "react";
import styled, { keyframes } from 'styled-components';


import HtmlIcon from '../assets/html-5.png';
import SassIcon from '../assets/sass.png';
import JsIcon from '../assets/js.png';
import ReactIcon from '../assets/physics.png';
import FirebaseIcon from '../assets/firebase.png';
import GulpIcon from '../assets/gulp.png';

export function Banner() {


    
    const BannerContainer = styled.div`
    display: block;
    justify-content: space-beetween;
    width: 100vw;
    height: 20vh;

    `
    const Sliding = keyframes`
    from {

        transform : scale(1);
        opacity   : 1;
    }
    50% {
        
        transform : scale(0.75);
        opacity   : 0.25;
    }
    to {
     
        transform : scale(1);
        opacity   : 1;
        transform: translate3d(-500%, 0, 0);
    }

    `

    const BannerImage = styled.img`
    width: 16.6 vw;
    height: 20vh;
    animation-duration: 3s;
    animation-name: ${Sliding};
    animation-iteration-count: infinite;


    `
   

    return (
        <>
        <BannerContainer>
       <BannerImage src = {HtmlIcon} alt={"Html Icon"}/>
       <BannerImage src = {SassIcon} alt = {"Sass Icon"} />
       <BannerImage src = {JsIcon} alt= {"Js Icon"}/>
       <BannerImage src = {ReactIcon} alt = {"ReactIcon"}/>
       <BannerImage src = {FirebaseIcon} alt = {"Firebase Icon"}/>
       <BannerImage src = {GulpIcon} alt ={"Gulp Icon"}/>

        </BannerContainer>
      
        
        </>
    )
} 