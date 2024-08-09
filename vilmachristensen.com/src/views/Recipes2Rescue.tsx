import React, { useEffect } from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Footer from '../components/Footer';
import Colors from '../styles/Colors';
import TextSection from '../components/TextSection';
import Recipes2RescueMockup from '../assets/Recipes2Rescue/Recipes2Rescue_mockup.png';
import Recipes2RescueResult1 from '../assets/Recipes2Rescue/Recipes2Rescue_results1.png';
import Recipes2RescueResult2 from '../assets/Recipes2Rescue/Recipes2Rescue_results2.png';

const Recipes2Rescue: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <Content>
            <Navbar></Navbar>
            <Intro contentType='Recipes2Rescue' header='Recipes2Rescue' 
            course='Human-Computer Interaction'
            info='An application that helps you find recipes based on the leftovers in your fridge.'
            tools='Figma, Google Forms'
            gradientColor1='#BBCE8A'
            gradientColor2='#FFFBDB'
            picture={Recipes2RescueMockup} />
            <TextSection contentType='Recipes2Rescue' 
            designText="During the design process of the Recipes2Rescue application, user research was conducted through surveys,
             user experience mapping, personas, and user scenarios. The results provided valuable insights into the needs and 
             preferences of end-users, forming a solid foundation for this user-centered project. Following the research, a 
             flowchart was created to outline the app's functionalities. Wireframes were developed and tested, leading to the 
             creation of a hi-fi prototype. Additionally, a graphical profile was established, including a color palette, fonts, 
             and a logo. Both the lo-fi and hi-fi prototypes were crafted in Figma."
            developText=''
            desResults={[Recipes2RescueResult1, Recipes2RescueResult2]}/>
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


export default Recipes2Rescue;