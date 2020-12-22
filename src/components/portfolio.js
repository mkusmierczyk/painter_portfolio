import React from 'react';
import styled from 'styled-components';


function Portfolio() {



    const Events = styled.div` 
    width: 50%; 
    margin: 5px;
    padding-bottom: 6rem;
    @media (max-width: 813px){
        width: 97%}  
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
