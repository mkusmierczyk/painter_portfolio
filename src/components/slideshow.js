import React from 'react';
import Slider from 'infinite-react-carousel';
import Painting1 from '../assets/image0.jpeg';
import Painting2 from '../assets/image1.jpeg';
import Painting3 from '../assets/image2.jpeg';
import Painting4 from '../assets/image3.jpg';
import Painting5 from '../assets/image4.jpeg';

function SlideShow() {


  const mystyle = {
    width: "300px",
    height: "300px"

  };
  

  return (
    <div style ={mystyle}>
    <Slider dots autoplay ={true} arrows = {false} >
    <div>
      <h3>1</h3>
      <img src = {Painting1}/>
    </div>
    <div>
      <h3>2</h3>
      <img src = {Painting2}/>
    </div>
    <div>
      <h3>3</h3>
      <img src = {Painting3}/>
    </div>
    <div>
      <h3>4</h3>
      <img src = {Painting4}/>
    </div>

  </Slider>
  </div>
  )
}

export default SlideShow;
