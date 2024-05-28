import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Footer from '../components/Footer';
import Colors from '../styles/Colors';

const Home: React.FC = () => {

    return (
        <Content>
            <Navbar></Navbar>
            <Intro/>
            <ProjectGrid>
            <RowType1>
                <ProjectCard name="Kurr Ads Manager"></ProjectCard>
                <ProjectCard name="Actus"></ProjectCard>
            </RowType1>
            <RowType2>
                <ProjectCard name="HotSpot"></ProjectCard>
                <ProjectCard name="FoodMap"></ProjectCard>
            </RowType2>
            <RowType1>
                <ProjectCard name="Umeå Stigen"></ProjectCard>
                <ProjectCard name="Recipes2Rescue"></ProjectCard>
            </RowType1>
            </ProjectGrid>
            <Footer/>
        </Content>
    )

}

const Content = styled.div`
display: grid; 
grid-template-rows: auto auto auto auto auto; 
gap: 20px;
background-color: ${Colors.white};
`;

const ProjectGrid = styled.div`
display: grid; 
gap: 50px;
// top, right, bottom, left
padding: 0 10% 0 10%;
`;

const RowType1 = styled.div`
display: grid; 
grid-template-columns: 0.8fr 1.2fr; 
grid-template-rows: 1fr; 
gap: 20px 50px; 
`;

const RowType2 = styled.div`
display: grid; 
grid-template-columns: 1.5fr 0.5fr; 
grid-template-rows: 1fr; 
gap: 20px 50px; 
`;

export default Home;