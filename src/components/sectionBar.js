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

    const DisplayRow = `
    ul{
    display: flex;
    flex-direction: row;
    `

    const SectionInfo = styled.section`
    background-color: #58595b;
    color: #ffffff;
    padding: 8px 0;
    margin: 0, auto;
   `

    const SectionInfoMedia = styled.div`
    ${DisplayRow}
    `

    const FacebookIcon = styled(Facebook)`
    ${Icon}
    `

    const InstagramIcon = styled(Instagram)`
    ${Icon} 
    `

    const SectionInfoContact = styled.div`
    ${DisplayRow}
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
                    <div className="row">
                        <SectionInfoMedia className="col-6">
                            <ul>
                                <li><a href="#"><FacebookIcon/> </a></li>
                                <li><a href="#"><InstagramIcon/> </a></li>
                            </ul>
                        </SectionInfoMedia>
                        <SectionInfoContact className="col-6">
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
