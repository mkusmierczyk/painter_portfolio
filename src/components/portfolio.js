import React from 'react';
import styled from 'styled-components';
import Painting4 from '../assets/image2.jpeg';
import Background from '../assets/background.png';

function Portfolio() {



    const Events = styled.div` 
    width: 50%; 
    margin: 5px;
    @media (max-width: 813px){
        width: 100%}  
    }
        
    h1{
     
    font-weight: bold;
    margin: 10px;
    text-align: center;
     }
    `
    const Year = styled.h2`
      margin: 20px;
      text-align: center;
    `

    const Event = styled.div`
    `
    const EventName = styled.h3`
       font-weight: bold;
       margin: 10px auto;
    `
    const EventDescription = styled.p`
        margin-right: 10px;
        text-align: justify;
    `
    const Image = styled.img`
    background: url(${Painting4}) no-repeat ;
        width: 50vw;
        height: 50vw;
      
     }
        
    `

    return (
        <>
           
              
                    <Events>
                        <h1>KILKA SŁÓW</h1>
                        <Year>2019</Year>
                        <Event>
                            <EventName> LOREM</EventName>
                            <EventDescription> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aspernatur at cum dicta dolorem eligendi excepturi iusto laudantium magnam modi, nisi perspiciatis praesentium provident quam quasi quia repudiandae vitae! Asperiores. </EventDescription>
                        </Event>
                        <Event>
                            <EventName> LOREM</EventName>
                            <EventDescription> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aspernatur at cum dicta dolorem eligendi excepturi iusto laudantium magnam modi, nisi perspiciatis praesentium provident quam quasi quia repudiandae vitae! Asperiores. </EventDescription>
                        </Event>
                        <Event>
                            <EventName> LOREM</EventName>
                            <EventDescription> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aspernatur at cum dicta dolorem eligendi excepturi iusto laudantium magnam modi, nisi perspiciatis praesentium provident quam quasi quia repudiandae vitae! Asperiores. </EventDescription>
                        </Event>
                        <Year>2018</Year>
                        <Event>
                            <EventName> LOREM</EventName>
                            <EventDescription> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aspernatur at cum dicta dolorem eligendi excepturi iusto laudantium magnam modi, nisi perspiciatis praesentium provident quam quasi quia repudiandae vitae! Asperiores. </EventDescription>
                        </Event>
                        <Event>
                            <EventName> LOREM</EventName>
                            <EventDescription> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aspernatur at cum dicta dolorem eligendi excepturi iusto laudantium magnam modi, nisi perspiciatis praesentium provident quam quasi quia repudiandae vitae! Asperiores. </EventDescription>
                        </Event>
                        <Event>
                            <EventName> LOREM</EventName>
                            <EventDescription> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aspernatur at cum dicta dolorem eligendi excepturi iusto laudantium magnam modi, nisi perspiciatis praesentium provident quam quasi quia repudiandae vitae! Asperiores. </EventDescription>
                        </Event>

                    </Events>
               
          
        </>
    );
}

export default Portfolio;
