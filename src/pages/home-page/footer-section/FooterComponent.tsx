import React from 'react';
import {
  StyledContainer,
  StyledHeading,
  StyledImg,
  StyledLogoWraper,
  StyledTypography,
  StyledWraper,
} from './StyledFooterComponent';
import {
  StyledButton,
  StyledSpan,
} from '../slogan-section/StyledSloganSection';
import img from './footer-section-img/footerLogo.png';
import { routes } from '../../../utils/routes';
import MainLogoComponent from '../../../components/navigation-component/main-logo/MainLogoComponent';

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
        <StyledLogoWraper>
          <MainLogoComponent />
        </StyledLogoWraper>
      </StyledContainer>
    </StyledWraper>
  );
};

export default FooterComponent;
