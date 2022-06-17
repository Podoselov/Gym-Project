import React, { useState } from 'react';
import { Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {
  StyledWraper,
  StyledNavBar,
  StyledContainer,
  StyledList,
  StyledListItem,
  StyledLink,
  StyledLogInButton,
  StyledSignInButton,
  StyledLogin,
  StyledMenuButton,
} from './StyledNavigationComponent';
import MainLogoComponent from './main-logo/MainLogoComponent';
import { routes } from '../../utils/routes';
import LoginModalComponent from '../login-component/LoginModalComponent';

const NavigationComponent: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
            <StyledLogInButton
              onClick={() => {
                handleOpen();
              }}
            >
              Log in
            </StyledLogInButton>
            <StyledSignInButton>Sign in</StyledSignInButton>
          </StyledLogin>
          <LoginModalComponent
            open={open}
            setOpen={setOpen}
            handleClose={handleClose}
          />
          <StyledMenuButton>
            <MenuIcon />
          </StyledMenuButton>
        </StyledNavBar>
      </StyledContainer>
    </StyledWraper>
  );
};

export default NavigationComponent;
