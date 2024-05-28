import React from 'react';
import styled from 'styled-components';
import Colors from '../styles/Colors';
import { Default_text_black, Default_text_white, Header_medium_black, Header_medium_white, Header_small_black } from '../styles/Text';
import ProjectCard from './ProjectCard';

interface TextSectionProps {
    contentType: string,
}

const TextSection: React.FC<TextSectionProps> = ({ contentType }) => {

    return (
        <SectionGrid>
            {contentType === "GetToKnow" ? (
                <Section backgroundColor={Colors.white}>
                    <Upper>
                        <Header_medium_black>Get to know me</Header_medium_black>
                        <Default_text_black>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tellus velit,
                            fringilla ac orci id, interdum blandit purus. Vivamus ullamcorper facilisis velit,
                            eget consequat mauris cursus sed. Etiam mauris orci, sollicitudin ut eros et, luctus
                            maximus elit. Nullam ac pharetra ex. </Default_text_black>
                    </Upper>
                    <Lower>
                        <InnerGrid>
                            <Header_small_black>
                                🎓 Education
                            </Header_small_black>
                            <Default_text_black>
                                M.Sc in Engineering in Interaction, Technology and Design,<br></br>
                                Umeå University
                                <br></br><br></br>
                                Exchange semester,<br></br>
                                Northern Arizona University
                            </Default_text_black>
                        </InnerGrid>
                        <InnerGrid>
                            <Header_small_black>
                                ❤️‍🔥 Passions
                            </Header_small_black>
                            <Default_text_black>
                                Front-end development
                                <br></br><br></br>
                                Problem solving
                                <br></br><br></br>
                                Human-machine interaction
                                <br></br><br></br>
                                Creating user-friendly services
                                <br></br><br></br>
                                Learning new things
                            </Default_text_black>
                        </InnerGrid>
                        <InnerGrid>
                            <Header_small_black>
                                👩🏽‍💻 Skills
                            </Header_small_black>
                            <Default_text_black>
                                TypeScript
                                <br></br><br></br>
                                JavaScript
                                <br></br><br></br>
                                React
                                <br></br><br></br>
                                Git
                                <br></br><br></br>
                                SQL
                                <br></br><br></br>
                                HTML
                                <br></br><br></br>
                                CSS
                                <br></br><br></br>
                                OOP in Java
                            </Default_text_black>
                        </InnerGrid>
                    </Lower>
                </Section>
            ) : contentType === "Projects" ? (
                <Section backgroundColor={Colors.light_grey}>
                    <Upper>
                        <Header_medium_black>Projects</Header_medium_black>
                        <Default_text_black>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tellus velit,
                            fringilla ac orci id, interdum blandit purus. Vivamus ullamcorper facilisis velit,
                            eget consequat mauris cursus sed. Etiam mauris orci, sollicitudin ut eros et, luctus
                            maximus elit. Nullam ac pharetra ex.
                        </Default_text_black>
                    </Upper>
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
                </Section>
            ) : (
                <Section backgroundColor={Colors.navy}>
                    <Upper>
                        <Header_medium_white>Let's stay in touch</Header_medium_white>
                        <Default_text_white>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tellus velit,
                            fringilla ac orci id, interdum blandit purus. Vivamus ullamcorper facilisis velit,
                            eget consequat mauris cursus sed. Etiam mauris orci, sollicitudin ut eros et, luctus
                            maximus elit. Nullam ac pharetra ex.
                        </Default_text_white>
                    </Upper>
                </Section>
            )}
        </SectionGrid>
    )
}

const SectionGrid = styled.div`
display: grid;
grid-template-rows: auto auto auto; 
gap: 0px;
`;

const Section = styled.div<{ backgroundColor: string }>`
display: grid;
grid-template-rows: auto auto;
background-color: ${(props) => props.backgroundColor};
gap: 90px; 
// top, right, bottom, left
padding: 5% 10% 5% 10%;
box-sizing: border-box;
overflow: hidden; 
`;

const Upper = styled.div`
display: grid;
grid-template-rows: auto auto; 
gap: 30px;
`;

const Lower = styled.div`
display: grid;
grid-template-columns: 33% 33% 33%; 
gap: 100px;
`;

const InnerGrid = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-baseline;
gap: 30px;
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

export default TextSection;

//display: grid;
//grid-template-rows: auto auto; 
//gap: 20px;

//const Section = styled.div<{ backgroundColor: string }>`
//grid-template-rows: auto auto;
//gap: 30px; 
//background-color: ${(props) => (props.backgroundColor)});
//`;