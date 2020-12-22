import React from 'react';
import styled from 'styled-components';
import {Tumblr} from '@styled-icons/boxicons-logos/Tumblr'
import {Instagram} from '@styled-icons/boxicons-logos/Instagram'
import {Email} from '@styled-icons/evaicons-solid/Email'
import {Mobile} from '@styled-icons/icomoon/Mobile'
import Background from '../assets/background.png';
import Portfolio from "./portfolio";

function Contact() {

    const HeadIcon = `
    color: black;
    width:3rem;
    height: 3rem;
    margin: 20px;
  
    `

    const TumblrIcon = styled(Tumblr)`
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
    padding-top: 3rem;
    background: url(${Background}) ;
    display: flex;
    justify-content: space-around;
    h1{
        font-weight: bold;
        margin: 10px;
        text-align: center;
         }

 
    @media (max-width: 813px){
        display: flex;
        flex-direction: column ;
        
    `
    const Contact = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 5px;
    @media (max-width: 812px){
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


    return (
        <>
            <section className="a">
                <ContactRow className="row">
                    <Contact ><h1>KONTAKT</h1>
                        <Title> <MobileIcon/></Title>
                        <Text href="tel:+48691326101">+48 691 326 101</Text>
                        <Title><EmailIcon/> </Title>
                        <Text href="silsilvalley@gmail.com">silsilvalley@gmail.com</Text>
                        <Title href="https://pasterfuckup.tumblr.com/"><TumblrIcon/></Title>
                        <Text href="https://pasterfuckup.tumblr.com/">Pasterfuckup</Text>
                        <Title href="https://www.instagram.com/direct/inbox/"><InstagramIcon/> </Title>
                        <Text href="https://www.instagram.com/direct/inbox/">Lorem Ipsum Dolor</Text>
                    </Contact>
                    <Portfolio />
                </ContactRow>

            </section>

        </>
    );
}

export default Contact;
