import React from 'react';
import styled from 'styled-components';
import Painting4 from '../assets/image3.jpeg';
import {Facebook} from '@styled-icons/boxicons-logos/Facebook'
import {Instagram} from '@styled-icons/boxicons-logos/Instagram'
import {Email} from '@styled-icons/evaicons-solid/Email'
import {Mobile} from '@styled-icons/icomoon/Mobile'

function Contact() {


    const HeadIcon = `
    color: black;
    width:3rem;
    height: 3rem;
    margin: 20px;
  
    `

    const FacebookIcon = styled(Facebook)`
    ${HeadIcon}
    `

    const EmailIcon = styled(Email)`
    ${HeadIcon} 
    `
    const MobileIcon = styled(Mobile)`
    ${HeadIcon} 
    `
    const InstagramIcon = styled(Instagram)`
    ${HeadIcon} 
    `

    const ContactRow =  styled.div`
    margin-top: 3rem;
    `
    const Contact = styled.div`
    width: 50%;
    display: flex;
  
    align-items: center;
    flex-direction: column;
    margin: 5px;
    @media (max-width: 600px){
    width:100%;}
    `

    const Text = styled.a`
    text-decoration: none;
    color: black;
    &:hover {
    font-weight: bold;
    }
    
    `
    const Title = styled.h2`
   
    `


    const ContactPhoto = styled.div`
        width: 50%;
        background: url(${Painting4}) no-repeat;
        width: 50vw;
        height: 50vw;
        @media (max-width: 600px){
        display: none;
        }
     }
`
    return (
        <>
            <section className="container">
                <ContactRow className="row">
                    <Contact><h1>Kontakt</h1>
                        <Title> <MobileIcon/></Title>
                        <Text href="tel:+48691326101">+48 691 326 101</Text>
                        <Title><EmailIcon/> </Title>
                        <Text href="#">judamerkva@gmail.com</Text>
                        <Title><FacebookIcon/></Title>
                        <Text href="#">Lorem Ipsum Dolor</Text>
                        <Title href="#"><InstagramIcon/> </Title>
                        <Text href="#">Lorem Ipsum Dolor</Text>
                    </Contact>
                    <ContactPhoto/>
                </ContactRow>

            </section>

        </>
    );
}

export default Contact;
