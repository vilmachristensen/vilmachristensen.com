import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Footer from '../components/Footer';
import Colors from '../styles/Colors';
import TextSection from '../components/TextSection';
import ActusMockup from '../assets/Actus_mockup.png';

const Actus: React.FC = () => {

    return (
        <Content>
            <Navbar></Navbar>
            <Intro contentType='Actus' header='Actus' 
            course='Innovative mobile services and systems'
            tools='React Native, Expo, Google Vision, OpenAI, TypeScript, Firebase, Git, SCRUM'
            gradientColor1='#22244E'
            gradientColor2='#E351A8'
            picture={ActusMockup} />
            <TextSection contentType='Actus' designText='Detta är en design text' developText='Detta är en develop text'/>
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


export default Actus;