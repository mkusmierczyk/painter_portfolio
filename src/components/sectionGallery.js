import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Painting1 from '../assets/image0.jpeg';
import Painting2 from '../assets/image1.jpeg';
import Painting3 from '../assets/image2.jpeg';
import Painting4 from '../assets/image3.jpeg';
import Painting5 from '../assets/image4.jpeg';
import Painting6 from '../assets/image5.jpeg';
import Painting7 from '../assets/image6.jpeg';

function SectionGallery() {


    const Gallery = styled.section`
    width: 100%;
        display: flex;
        justify-content: center;
    `

    return (
        <>
            <Gallery>
                <img src={Painting1}/>
                <img src={Painting2}/>
                <img src={Painting3}/>
                <img src={Painting4}/>
                <img src={Painting5}/>
                <img src={Painting6}/>
                <img src={Painting7}/>

            </Gallery>


        </>
    );
}

export default SectionGallery;
