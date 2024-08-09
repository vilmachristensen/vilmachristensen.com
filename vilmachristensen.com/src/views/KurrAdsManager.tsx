import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Footer from '../components/Footer';
import Colors from '../styles/Colors';
import TextSection from '../components/TextSection';
import KurrMockup from '../assets/KurrAdsManager/KurrAdsManager_mockup.png';
import KurrResult1 from '../assets/KurrAdsManager/kurr_result1.png'
import KurrResult2 from '../assets/KurrAdsManager/Kurr_result2.png'

const KurrAdsManager: React.FC = () => {

    return (
        <Content>
            <Navbar></Navbar>
            <Intro contentType='Kurr Ads Manager' header='Kurr Ads Manager'
                course='Advanced Quality Project Work in Interaction Technology and Design-Build-Test'
                tools='React, TypeScript, Git, Figma, SCRUM'
                info="A web application that allows advertisers on Kurr AB's application to upload, manage, and track their ads."
                gradientColor1='#FF9B7F'
                gradientColor2='#F9C7B8'
                picture={KurrMockup} />
            <TextSection contentType='Kurr' designText='Kurr AB, financed by food producers ads, currently uses spreadsheets and 
            emails for ad uploads. Utilizing Design Thinking, the project involved analyzing existing systems and competitor tools,
             gathering qualitative data through interviews, and defining requirements and user personas. The ideation phase 
             generated various ideas, leading to the creation of flowcharts. In the prototyping and testing phases, 
             the team developed multiple low-fidelity prototypes, which were refined into two wireframes based on user and 
             heuristic feedback. The final deliverable included a high-fidelity Figma prototype featuring a campaign creation 
             flow and overview, designed according to user needs and feedback from Kurr AB.'
                developText='Throughout the project, various methodologies and technologies were employed. Kanban was utilized for 
             project management, with a Kanban board created in Git to track activities and assign tasks efficiently. This board 
             enabled monitoring of progress through categories such as ongoing and completed tasks. Git also facilitated 
             collaboration with clear version control and branching, while LiveShare in VS Code allowed for simultaneous code 
             editing. For front-end development, React with TypeScript was chosen, as requested by Kurr AB and to enhance 
             technical expertise. Reusable components derived from Figma prototypes were implemented, improving code readability 
             and debugging. Additional tools included Storybook for component display and testing, ESlint for code analysis and 
             error detection, and Prettier for code formatting. These practices and tools ensured a structured and efficient 
             development process.'
             devResults={[KurrResult1, KurrResult2]} />
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


export default KurrAdsManager;