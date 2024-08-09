import styled from 'styled-components';
import colors from './Colors';
import "@fontsource/raleway";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/700.css";

const Header_white = styled.text`
  color: ${colors.white};
  font-family: 'Raleway';
  font-size: 60px;
  font-weight: 700;
`;

const Header_black = styled.text`
  color: ${colors.black};
  font-family: 'Raleway';
  font-size: 60px;
  font-weight: 700;
`;

const Header_responsive_white = styled.text`
  color: ${colors.white};
  font-family: 'Raleway';
  font-size: 55px;

  font-weight: 700;
`;

const Header_responsive_black = styled.text`
  color: ${colors.black};
  font-family: 'Raleway';
  font-size: 55px;

  font-weight: 700;
`;

const Default_text_big_white = styled.text`
    color: ${colors.white};
    font-family: 'Raleway';
    font-size: 22px;
    line-height: 32px;
    font-weight: 400;
    `;

const Default_text_big_black = styled.text`
    color: ${colors.black};
    font-family: 'Raleway';
    font-size: 20px;
    line-height: 32px;
    font-weight: 400;
    `;

const Header_medium_black = styled.text`
    color: ${colors.black};
    font-family: 'Raleway';
    font-size: 45px;
    line-height: 32px;
    font-weight: 700;
  `;

const Header_medium_white = styled.text`
    color: ${colors.white};
    font-family: 'Raleway';
    font-size: 45px;
    line-height: 32px;
    font-weight: 700;
  `;

const Header_small_white = styled.text`
    color: ${colors.white};
    font-family: 'Raleway';
    font-size: 22px;
    line-height: 32px;
    font-weight: 700;
  `;

const Header_small_black = styled.text`
  color: ${colors.black};
  font-family: 'Raleway';
  font-size: 22px;
  line-height: 32px;
  font-weight: 700;
`;

const Default_text_white = styled.text`
  color: ${colors.white};
  font-family: 'Raleway';
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
`;

const Default_text_black = styled.text`
color: ${colors.black};
font-family: 'Raleway';
font-size: 18px;
line-height: 27px;
font-weight: 400;
`;

const Footer_text = styled.text`
  color: ${colors.white};
  font-family: 'Raleway';
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;


export { Header_small_white, Header_white, Header_black, Header_responsive_white, Header_responsive_black, Default_text_big_white, Default_text_big_black, Header_medium_black, Header_medium_white, Header_small_black, Default_text_white, Default_text_black, Footer_text };