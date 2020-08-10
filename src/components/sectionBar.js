import React from 'react';
import styled from 'styled-components';
import {Facebook} from '@styled-icons/boxicons-logos/Facebook'
import {Instagram} from '@styled-icons/boxicons-logos/Instagram'
import {Email} from '@styled-icons/evaicons-solid/Email'
import {Mobile} from '@styled-icons/icomoon/Mobile'


function SectionBar() {

    const Icon = `
    color: #c7c7c7;
    width: 16px;
    height: 16px;
    margin: 5px;
    `

    const SectionInfo = styled.section`
    background-color: #58595b;
    color: #ffffff;
    padding: 8px 0;
    margin: 0, auto;
    .columnBar{
     @media (max-width: 600px){
     display: flex;
     flex-direction: column;
    }
    }
   `

    const SectionInfoMedia = styled.div`
    width: 50%;
    @media (max-width: 600px){
    width:100%;}
    ul{  
    display: flex;
    flex-direction: row;
    @media (max-width: 600px){
    display:flex;
    justify-content: center;
    }
    
    }
    `

    const FacebookIcon = styled(Facebook)`
    ${Icon}
    `

    const InstagramIcon = styled(Instagram)`
    ${Icon} 
    `

    const SectionInfoContact = styled.div`   
    width: 50%;
    @media (max-width: 600px){
    width:100%;}
    ul{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    @media (max-width: 600px){
    display:flex;
    justify-content: center;}
    li{
    display: flex;
    flex-direction: row;
    align-items: center;
    }
    a{
    font-size: 0.7rem;
    font-weight: light;
    color: #c7c7c7;
    text-decoration: none;
    }
    `

    const MobileIcon = styled(Mobile)`
    ${Icon}`

    const EmailIcon = styled(Email)`
    ${Icon}`

    return (
        <>
            <SectionInfo>
                <div className="container">
                    <div className="row columnBar">
                        <SectionInfoMedia >
                            <ul>
                                <li><a href="#"><FacebookIcon/> </a></li>
                                <li><a href="#"><InstagramIcon/> </a></li>
                            </ul>
                        </SectionInfoMedia>
                        <SectionInfoContact>
                            <ul>
                                <li><EmailIcon/><a href="tel:+48691326101">+48 691 326 101</a></li>
                                <li><MobileIcon/><a href="mailto:judamerkva@gmail.com">judamerkva@gmail.com</a></li>
                            </ul>
                        </SectionInfoContact>
                    </div>
                </div>
            </SectionInfo>
        </>
    );
}

export default SectionBar;
