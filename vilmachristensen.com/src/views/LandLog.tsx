import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Footer from '../components/Footer';
import Colors from '../styles/Colors';
import TextSection from '../components/TextSection';
import LandLogMockup from '../assets/LandLog_mockup.png'

const LandLog: React.FC = () => {

    return (
        <Content>
            <Navbar></Navbar>
            <Intro contentType='LandLog' header='LandLog' 
            course='Service development and design for the Internet of Things'
            tools='Raspberry Pi, Mongoose OS, ESP32, Node-RED, JavaScript'
            gradientColor1='#3B708F'
            gradientColor2='#A3E1F0'
            picture={LandLogMockup} />
            <TextSection contentType='LandLog' designText='Detta är en design text' developText='Detta är en develop text'/>
            <Footer />
        </Content>
    )

}

const Content = styled.div`
display: grid; 
grid-template-rows: auto auto auto auto; 
gap: 0px;
background-color: ${Colors.white};
`;


export default LandLog;