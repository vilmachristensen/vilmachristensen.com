import styled from 'styled-components';
import colors from './Colors';
import "@fontsource/raleway";
import "@fontsource/raleway/400.css";


const Header_small_white = styled.text`
    color: ${colors.white};
    font-family: 'Raleway';
    font-size: 25px;
    line-space: 24px;
    font-weight: 700;
  `;

const Header_small_black = styled.text`
  color: ${colors.black};
  font-family: 'Raleway';
  font-size: 25px;
  line-space: 24px;
  font-weight: 700;
`;

const Default_text_white = styled.text`
  color: ${colors.white};
  font-family: 'Raleway';
  font-size: 20px;
  line-space: 24px;
  font-weight: 400;
`;

const Default_text_black = styled.text`
color: ${colors.black};
font-family: 'Raleway';
font-size: 20px;
line-space: 24px;
font-weight: 400;
`;


export { Header_small_white, Header_small_black, Default_text_white, Default_text_black };