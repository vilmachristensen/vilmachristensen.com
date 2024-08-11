import React, { useEffect } from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Footer from '../components/Footer';
import Colors from '../styles/Colors';
import TextSection from '../components/TextSection';
import LuckanMockup from '../assets/Luckan/Luckan_mockup.png';
import LuckanResult1 from '../assets/Luckan/Luckan_results1.png';
import LuckanResult2 from '../assets/Luckan/Luckan_results2.png';

const Luckan: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <Content>
            <Navbar></Navbar>
            <Intro contentType='Luckan' header='Luckan' 
            info="A web application where the elderly can find local events, create events, and connect with other seniors."
            course='Design for user experience'
            tools='Figma, Google Forms'
            gradientColor1='#8172AB'
            gradientColor2='#DFDAF1'
            picture={LuckanMockup} />
            <TextSection contentType='Luckan' designText="The design process followed the Double Diamond framework. In the Discover phase, 
            similar applications were analyzed, interviews with elderly users were conducted, and a comprehensive market analysis 
            was performed. During the Define phase, insights from this research were used to establish key guidelines and create a 
            list of necessary app functionalities based on the target group's needs. In the Develop phase, the team split into two 
            groups to create and test low-fidelity prototypes and flowcharts. Feedback from these tests led to the integration of 
            the best features into a single wireframe. A graphical profile, including a color palette, fonts, icons, and a logo, 
            was then developed. Final design components were created individually in Figma, leading to the production of both
            wireframes and a high-fidelity prototype. Low-fidelity prototypes were paper-based to facilitate user testing and 
            modifications" developText=''
            desResults={[LuckanResult1, LuckanResult2]}/>
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


export default Luckan;