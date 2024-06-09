import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Footer from '../components/Footer';
import Colors from '../styles/Colors';
import TextSection from '../components/TextSection';
import LuckanMockup from '../assets/Luckan_mockup.png'

const Luckan: React.FC = () => {

    return (
        <Content>
            <Navbar></Navbar>
            <Intro contentType='Luckan' header='Luckan' 
            course='Design for user experience'
            tools='Figma, Google Forms'
            gradientColor1='#8172AB'
            gradientColor2='#DFDAF1'
            picture={LuckanMockup} />
            <TextSection contentType='Luckan' designText='Detta är en design text' developText='Detta är en develop text'/>
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


export default Luckan;