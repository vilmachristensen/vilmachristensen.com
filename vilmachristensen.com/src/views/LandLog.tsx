import React, { useEffect } from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Footer from '../components/Footer';
import Colors from '../styles/Colors';
import TextSection from '../components/TextSection';
import LandLogMockup from '../assets/LandLog/LandLog_mockup.png';
import LandLogResult1 from '../assets/LandLog/LandLog_result1.png';
import LandLogResult2 from '../assets/LandLog/LandLog_result2.png';

const LandLog: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return (
        <Content>
            <Navbar></Navbar>
            <Intro contentType='LandLog' header='LandLog' 
            course='Service development and design for the Internet of Things'
            info="A system that assists the landlord with daily tasks by providing notifications about room temperature, window status, and loud noises"
            tools='Raspberry Pi, Mongoose OS, ESP32, Node-RED, JavaScript'
            gradientColor1='#3B708F'
            gradientColor2='#A3E1F0'
            picture={LandLogMockup} />
            <TextSection contentType='LandLog' designText="When designing the user interface for the LandLog system, it was crucial that all three notification 
            areas—room temperature, window status, and noise levels—were clearly displayed to the user, which became a guiding principle 
            in the design process. A professional and alert color palette was chosen, with colors like blue and 
            red effectively representing warm and cold temperatures. Emphasis was placed on ensuring good contrast levels for readability, 
            with white text on dark backgrounds and bold, capitalized text in notifications to enhance visibility. Icons were used alongside notifications, 
            with a speaker icon for sound alerts and a thermometer icon for temperature alerts, sourced from the Noun Project. 
            Illustrations from Storyset were included on the start and control views to visually represent the system's purpose, 
            with customizations to align them with the chosen color palette, resulting in a professional and cohesive design." 
            developText='The system development involved both hardware and software components. Three ESP units, each equipped with different sensors—two 
            for temperature, one for sound, and one for window status—were connected to a Raspberry Pi, which acted as a broker and subscribed to various 
            message queues from these sensors. Node-RED was utilized to manage the flow and logic, incorporating four MQTT nodes to handle data from different 
            topics: room temperature, radiator temperature, sound level, and window status. The logical flow, detailed in the design, included setting global
             variables based on sensor inputs and using function nodes to classify and process alerts for the user interface. Alerts for sound and temperature 
             were managed through separate flows, with notifications displayed in the UI based on classified data. The UI components included text, plots, and gauges 
             for real-time data display, and notifications were controlled through CSS classes for visibility, ensuring users had adequate time to read alerts before 
             they disappeared.'
             devResults={[LandLogResult1, LandLogResult2]}/>
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