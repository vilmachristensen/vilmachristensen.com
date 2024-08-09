import React from 'react';
import styled from 'styled-components';
import Colors from '../styles/Colors';
import { Default_text_black, Default_text_white, Header_medium_black, Header_medium_white, Header_small_black } from '../styles/Text';
import ProjectCard from './ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


interface TextSectionProps {
    contentType: string,
    designText?: string,
    developText?: string,
    introText?: string,
    desResults?: string[];
    devResults?: string[];
}

const TextSection: React.FC<TextSectionProps> = ({ contentType, introText, designText, devResults, desResults, developText }) => {

    const handleClick = (type: string) => {
        if (type === "LinkedIn") {
            window.location.href = 'https://linkedin.com/in/vilma-christensen-10a335231';
        }
        else if (type === "Mail") {
            window.location.href = 'mailto:vilma.m.christensen@gmail.com';
        }
        else {
            window.location.href = 'https://github.com/vilmachristensen';
        }
    }

    return (
        <SectionGrid>
            {contentType === "GetToKnow" ? (
                <Section backgroundColor={Colors.white}>
                    <Upper>
                        <Header_medium_black>About me</Header_medium_black>
                        <Default_text_black>I am 25 years old and approaching my final year as a student in an M.Sc. program in Engineering in Interaction, Technology, and Design. One of the reasons I chose this program is that it offers the perfect combination of design and creative thinking with mathematics, programming, and problem-solving. Through my studies and work experience, I have come to understand that development is what I enjoy most. I'm excited to continue developing in these areas!</Default_text_black>
                    </Upper>
                    <Lower>
                        <InnerGrid>
                            <Header_small_black>
                                🎓 Education
                            </Header_small_black>
                            <Default_text_black>
                                M.Sc in Engineering in Interaction, Technology and Design,<br></br>
                                <i>Umeå University</i>
                                <br></br><br></br>
                                Exchange semester,<br></br>
                                <i>Northern Arizona University</i>
                            </Default_text_black>
                        </InnerGrid>
                        <InnerGrid>
                            <Header_small_black>
                                👩🏽‍💻 Skills
                            </Header_small_black>
                            <Default_text_black>
                                TypeScript
                                <br></br>
                                JavaScript
                                <br></br>
                                React
                                <br></br>
                                React Native
                                <br></br>
                                Git
                                <br></br>
                                SQL
                                <br></br>
                                HTML
                                <br></br>
                                CSS
                                <br></br>
                                Object Oriented Programming
                            </Default_text_black>
                        </InnerGrid>
                        <InnerGrid>
                            <Header_small_black>
                                ❤️‍🔥 Passions
                            </Header_small_black>
                            <Default_text_black>
                                Front-end development
                                <br></br>
                                Problem solving
                                <br></br>
                                Human-machine interaction
                                <br></br>
                                Creating user-friendly services
                                <br></br>
                            </Default_text_black>
                        </InnerGrid>
                    </Lower>
                </Section>
            ) : contentType === "Projects" ? (
                <Section backgroundColor={Colors.light_grey}>
                    <Upper>
                        <Header_medium_black>Projects</Header_medium_black>
                        <Default_text_black>During my studies, I have engaged in various projects. I have developed skills in both
                            front-end and back-end development, UX/UI design, and working with SCRUM and agile project management.
                            Explore some of them down below👇🏼
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
                            <ProjectCard name="UmeaStigen"></ProjectCard>
                            <ProjectCard name="Recipes2Rescue"></ProjectCard>
                        </RowType1>
                        <RowType2>
                            <ProjectCard name="LandLog"></ProjectCard>
                            <ProjectCard name="Luckan"></ProjectCard>
                        </RowType2>
                    </ProjectGrid>
                </Section>
            ) : contentType === "Contact" ? (
                <Section backgroundColor={Colors.navy}>
                    <Upper>
                        <Header_medium_white>Let's stay in touch</Header_medium_white>
                        <Default_text_white>
                            Feel free to send me an email or a DM on LinkedIn 😄
                            <br></br><br></br>
                            <Contact>
                                <InnerContact onClick={() => handleClick('Mail')}>
                                    <FontAwesomeIcon size='1x' color={Colors.white} icon={faEnvelope} style={{ paddingRight: '20px' }} />vilma.m.christensen@gmail.com
                                </InnerContact>
                                <InnerContact onClick={() => handleClick('LinkedIn')}>
                                    <FontAwesomeIcon size='1x' color={Colors.white} icon={faLinkedinIn} style={{ paddingRight: '20px' }} />LinkedIn
                                </InnerContact>
                                <InnerContact onClick={() => handleClick('GitHub')}>
                                    <FontAwesomeIcon size='1x' color={Colors.white} icon={faGithub} style={{ paddingRight: '20px' }} />GitHub
                                </InnerContact>
                            </Contact>
                        </Default_text_white>
                    </Upper>
                </Section>
            ) : (
                <><Section backgroundColor={Colors.white}>
                    <Upper>
                        <Header_medium_black>Designing</Header_medium_black>
                        <Default_text_black>{designText}</Default_text_black>
                        {desResults !== undefined && desResults.length > 0 &&
                            <Results>
                                {desResults[0] && <img src={desResults[0]} style={{ width: '100%' }} />}
                                {desResults[1] && <img src={desResults[1]} style={{ width: '100%' }} />}
                            </Results>
                        }
                    </Upper>
                </Section>
                    {developText !== "" &&
                        <Section backgroundColor={Colors.light_grey}>
                            <Upper results={devResults !== undefined ? true : false}>
                                <Header_medium_black>Developing</Header_medium_black>
                                <Default_text_black>{developText}</Default_text_black>
                                {devResults !== undefined && devResults.length > 0 &&
                                    <Results>
                                        {devResults[0] && <img src={devResults[0]} style={{ width: '100%' }} />}
                                        {devResults[1] && <img src={devResults[1]} style={{ width: '100%' }} />}
                                    </Results>
                                }
                            </Upper>
                        </Section>
                    }

                </>

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
gap: 0px; 
// top, right, bottom, left
padding: 5% 10% 5% 10%;
box-sizing: border-box;
overflow: hidden; 

@media (max-width: 700px) {
    padding: 20% 10% 20% 10%;
  }

`;

const Upper = styled.div<{ results?: boolean }>`
display: grid;
grid-template-rows: auto auto auto; 
gap: 30px;
`;

const Results = styled.div`
display: grid;
grid-template-columns: 1fr 1fr; 
width: 100%; 
gap: 20px; 
`;

const Lower = styled.div`
display: grid;
grid-template-columns: 33% 33% 33%; 
gap: 100px;

@media (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }

`;

const InnerGrid = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-baseline;
gap: 20px;
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

@media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }

`;

const RowType2 = styled.div`
display: grid; 
grid-template-columns: 1.5fr 0.5fr; 
grid-template-rows: 1fr; 
gap: 20px 50px; 

@media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const Contact = styled.div`
display: grid; 
grid-template-rows: auto auto auto; 
gap: 20px; 

@media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }

`;

const InnerContact = styled.div`
text-decoration: underline;

&:hover {
    cursor: pointer;
    opacity: 80%;
}

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