import React from 'react';
import Slider from 'infinite-react-carousel';
import Painting1 from '../assets/image0.jpeg';
import Painting2 from '../assets/image1.jpeg';
import Painting3 from '../assets/image2.jpeg';
import Painting4 from '../assets/image3.jpg';
import styled from 'styled-components';

function SlideShow() {

  const imgStyle = {
    width: "100vw",
    height: "49vh" ,
  }

  return (
    <div className = {"slide row"}>
    <Slider dots autoplay ={true} arrows = {false}  >
    <div className = {"imgStyle"}>
      <img  style ={imgStyle} src = {Painting1} alt ={"abc"}/>
    </div>
    <div className = {"imgStyle"}>
      <img style ={imgStyle} src = {Painting2} alt ={"abc"}/>
    </div>
    <div className = {"imgStyle"}>
      <img style ={imgStyle} src = {Painting3} alt ={"abc"}/>
    </div>
    <div className = {"imgStyle"}>
      <img style ={imgStyle} src = {Painting4} alt ={"abc"}/>
   
    </div>

  </Slider>
  </div>
  )
}

export default SlideShow;
