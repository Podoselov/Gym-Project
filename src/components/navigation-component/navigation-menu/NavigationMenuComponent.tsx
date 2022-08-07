import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StyledButton,
  StyledButtonContainer,
  StyledButtonLink,
  StyledButtonLogIn,
  StyledCloseIcon,
  StyledContainer,
  StyledContainerLink,
  StyledHeaderWraper,
  StyledMenuLink,
  StyledWraper,
} from './StyledNavigationMenuComponent';
import MainLogoComponent from '../main-logo/MainLogoComponent';
import { routes } from '../../../utils/routes';

const NavigationMenuComponent: React.FC = () => {
  const navigate = useNavigate();

  const closeMenuIconClick = () => navigate(-1);

  return (
    <StyledWraper>
      <StyledContainer>
        <StyledHeaderWraper>
          <MainLogoComponent />
          <StyledButton onClick={closeMenuIconClick}>
            <StyledCloseIcon />
          </StyledButton>
        </StyledHeaderWraper>
        <StyledContainerLink>
          <StyledMenuLink to={routes.HOME_ROUTE}>Home</StyledMenuLink>
          <StyledMenuLink to={routes.ABOUT_ROUTE}>ABOUT</StyledMenuLink>
          <StyledMenuLink to={routes.WORKOUTS_ROUTE}>WORKOUTS</StyledMenuLink>
          <StyledMenuLink to={routes.PRICING_ROUTE}>PRICING</StyledMenuLink>
          <StyledMenuLink to={routes.COMMUNITY_ROUTE}>COMMUNITY</StyledMenuLink>
          <StyledMenuLink to={routes.FAQ_ROUTE}>FAQ</StyledMenuLink>
        </StyledContainerLink>
        <StyledButtonContainer>
          <StyledButtonLink to={routes.SIGN_UP_ROUTE}>SING UP</StyledButtonLink>
          <StyledButtonLogIn to={routes.LOGIN_ROUTE}>LOG IN</StyledButtonLogIn>
        </StyledButtonContainer>
      </StyledContainer>
    </StyledWraper>
  );
};

export default NavigationMenuComponent;
