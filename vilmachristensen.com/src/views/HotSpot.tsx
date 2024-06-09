import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Footer from '../components/Footer';
import Colors from '../styles/Colors';
import TextSection from '../components/TextSection';
import HotSpotMockup from '../assets/HotSpot_mockup.png'

const HotSpot: React.FC = () => {

    return (
        <Content>
            <Navbar></Navbar>
            <Intro contentType='HotSpot' header='HotSpot' 
            course='Prototype Development for Mobile Applications'
            tools='React Native, Expo, Google Maps API, TypeScript, Firebase, Git, SCRUM'
            gradientColor1='#D03853'
            gradientColor2='#E2977D'
            picture={HotSpotMockup} />
            <TextSection contentType='HotSpot' designText='Detta är en design text' developText='Detta är en develop text'/>
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


export default HotSpot;