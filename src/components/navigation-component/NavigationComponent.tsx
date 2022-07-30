import React from 'react';
import { Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {
  StyledContainer,
  StyledLink,
  StyledList,
  StyledListItem,
  StyledLogin,
  StyledLogInButton,
  StyledMenuButton,
  StyledNavBar,
  StyledSignInButton,
  StyledWraper,
} from './StyledNavigationComponent';
import MainLogoComponent from './main-logo/MainLogoComponent';
import { routes } from '../../utils/routes';

const NavigationComponent: React.FC = () => {
  return (
    <StyledWraper>
      <StyledContainer>
        <StyledNavBar>
          <Box>
            <MainLogoComponent />
          </Box>
          <StyledList>
            <StyledListItem>
              <StyledLink to={routes.HOME_ROUTE}>Home</StyledLink>
              <StyledLink to={routes.ABOUT_ROUTE}>About</StyledLink>
              <StyledLink to={routes.WORKOUTS_ROUTE}>Workouts</StyledLink>
              <StyledLink to={routes.PRICING_ROUTE}>Pricing</StyledLink>
              <StyledLink to={routes.COMMUNITY_ROUTE}>Community</StyledLink>
              <StyledLink to={routes.FAQ_ROUTE}>FAQ</StyledLink>
            </StyledListItem>
          </StyledList>
          <StyledLogin>
            <StyledLogInButton to={routes.LOGIN_ROUTE}>
              Log in
            </StyledLogInButton>
            <StyledSignInButton to={routes.SIGN_UP_ROUTE}>
              Sign in
            </StyledSignInButton>
          </StyledLogin>
          <StyledMenuButton to={routes.MENU_ROUTE}>
            <MenuIcon />
          </StyledMenuButton>
        </StyledNavBar>
      </StyledContainer>
    </StyledWraper>
  );
};

export default NavigationComponent;
