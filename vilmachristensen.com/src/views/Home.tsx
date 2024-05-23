import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {

    return (
        <Content>
            <Navbar></Navbar>
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
        </Content>
    )

}

const Content = styled.div`
padding: 10%;
`;

const ProjectGrid = styled.div`
display: grid; 
gap: 50px;
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