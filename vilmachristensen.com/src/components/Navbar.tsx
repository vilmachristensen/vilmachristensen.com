import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo.svg'
import { Header_small_black } from '../styles/Text';
import { useNavigate } from 'react-router-dom';

//0,15850144
const Navbar: React.FC = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return (
        <Content>
            <Header_small_black onClick={handleClick} style={{cursor: 'pointer'}}>V.Christensen</Header_small_black>
        </Content>
    )
}

const Content = styled.div`
//top right bottom left
padding: 2% 7% 2% 7%;

@media (max-width: 560px) {
padding: 5% 7% 5% 7%;
  }
`;

export default Navbar;