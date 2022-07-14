import React from 'react';
import {
  StyledWraper,
  StyledHeading,
  StyledTypography,
  StyledContainer,
  StyledImg,
} from './StyledFooterComponent';
import {
  StyledButton,
  StyledSpan,
} from '../slogan-section/StyledSloganSection';
import img from './footer-section-img/footerLogo.png';
import { routes } from '../../../utils/routes';

const FooterComponent: React.FC = () => {
  return (
    <StyledWraper>
      <StyledContainer>
        <StyledImg src={img} alt="логотип" />
        <StyledHeading>
          Wanna join <StyledSpan sx={{ display: 'inline-block' }}>&</StyledSpan>{' '}
          have fun?
        </StyledHeading>
        <StyledTypography>
          We’ll keep you updated on the things you need to know about Gymme.
          Nothing more, nothing less.
        </StyledTypography>
        <StyledButton to={routes.LOGIN_ROUTE}>JOIN NOW</StyledButton>
      </StyledContainer>
    </StyledWraper>
  );
};

export default FooterComponent;
