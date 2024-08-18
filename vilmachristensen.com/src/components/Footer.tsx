import React from 'react';
import styled from 'styled-components';
import Colors from '../styles/Colors';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Footer_text } from '../styles/Text';

const Footer: React.FC = () => {

    const handleClick = (type: string) => {
        if (type === "LinkedIn") {
            window.location.href = 'https://www.linkedin.com/in/vilma-christensen/';
        }
        else if (type === "Mail") {
            window.location.href = 'mailto:vilma.m.christensen@gmail.com';
        }
    };

    return (
        <Content>
            <Left>
                <InnerLeft onClick={() => handleClick('LinkedIn')}>
                    <FontAwesomeIcon size='1x' color={Colors.white} icon={faLinkedinIn} /> <Footer_text style={{ textDecoration: 'underline' }}>LinkedIn</Footer_text>
                </InnerLeft>
                <InnerLeft onClick={() => handleClick('Mail')}>
                    <FontAwesomeIcon size='1x' color={Colors.white} icon={faEnvelope} /> <Footer_text style={{ textDecoration: 'underline' }}>vilma.m.christensen@gmail.com</Footer_text>
                </InnerLeft>
            </Left>
        </Content>
    )
}

const Content = styled.div`
display: flex; 
justify-content: space-between;
align-items: baseline;
background-color: ${Colors.navy};
padding-right: 5%;

`;

const Left = styled.div`
display: grid; 
grid-template-columns: auto auto; 
gap: 20px;
justify-content: start; 
padding-left: 5%;
padding-bottom: 2%;
padding-top: 2%;

@media (max-width: 560px) {
    grid-template-columns: 1fr;
    gap: 10px;
    justify-content: center; 
    padding-bottom: 5%;
    padding-top: 5%;
  }

`;

const InnerLeft = styled.div`
display: flex;
align-items: center;
gap: 10px;
&:hover {
    cursor: pointer;
    opacity: 80%;
}
`;

export default Footer;