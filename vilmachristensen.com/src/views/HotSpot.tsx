import React, { useEffect } from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Footer from '../components/Footer';
import Colors from '../styles/Colors';
import TextSection from '../components/TextSection';
import HotSpotMockup from '../assets/HotSpot_mockup.png'

const HotSpot: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <Content>
            <Navbar></Navbar>
            <Intro contentType='HotSpot' header='HotSpot' 
            course='Prototype Development for Mobile Applications'
            tools='React Native, Expo, Google Maps API, TypeScript, Firebase, Git, SCRUM'
            info='An application for discovering hidden gems in a new city, storing personal pins of favorite secret locations, 
            and following friends to view their favorite spots.'
            gradientColor1='#D03853'
            gradientColor2='#E2977D'
            picture={HotSpotMockup} />
            <TextSection contentType='HotSpot' 
            designText='The design process began with creating a lo-fi prototype to test the user experience of the interface and explore various 
            flows, icons, and modifications. Insights from these tests were discussed and integrated into a final lo-fi prototype. Next, 
            a graphical profile was developed, including a color palette, icons, and font selections. With the graphical profile 
            established, team members proceeded to design individual components in Figma, ensuring consistency and clarity throughout 
            the application. These components were then assembled into a cohesive hi-fi prototype. Both the lo-fi and hi-fi prototypes 
            were created using Figma.'
            developText="The application was developed using React Native Expo and features a map displaying both personal and friends' pins. 
            Authentication is managed via Firebase with email and password, while location data and mapping are integrated with Google 
            Places API and Apple Maps. The project was organized using a Kanban board on GitHub to structure and distribute tasks. 
            The implementation phase began with the creation of components in separate branches, handled individually. 
            Each team member was responsible for a specific page, and upon completion, the Firebase database was integrated. 
            Subsequently, all branches were merged into the main branch on GitHub. In the final phase, the team worked together 
            to assemble the components and simplify the integration process."/>
            <Footer />
        </Content>
    )

}

const Content = styled.div`
display: grid; 
grid-template-rows: auto auto auto auto; 
gap: 0px;
background-color: ${Colors.white};
max-width: 100%;
overflow-x: hidden;
`;


export default HotSpot;