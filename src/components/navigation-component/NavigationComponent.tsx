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
import { LoginForm } from '../login-component/form-login-component/LoginForm';
import SignInFormComponent from '../login-component/form-signin-component/SignInFormComponent';

const NavigationComponent: React.FC = () => {
  const [openLogInModal, setOpenLogInModal] = useState(false);
  const [openSignInModal, setOpenSignInModal] = useState(false);

  const handleOpenLogInModal = () => {
    setOpenLogInModal(true);
  };
  const handleCloseLogInModal = () => {
    setOpenLogInModal(false);
  };

  const handleOpenSignInModal = () => {
    setOpenSignInModal(true);
  };
  const handleCloseSignInModal = () => {
    setOpenSignInModal(false);
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
                handleOpenLogInModal();
              }}
            >
              Log in
            </StyledLogInButton>
            <StyledSignInButton
              onClick={() => {
                handleOpenSignInModal();
              }}
            >
              Sign in
            </StyledSignInButton>
          </StyledLogin>
          <LoginModalComponent
            open={openLogInModal}
            setOpen={setOpenLogInModal}
            handleClose={handleCloseLogInModal}
            firstHeading="WELCOME BACK,"
            secondHeading="PLEASE LOGIN TO YOU ACCOUNT"
            formComponent={<LoginForm />}
          />
          <LoginModalComponent
            open={openSignInModal}
            setOpen={setOpenSignInModal}
            handleClose={handleCloseSignInModal}
            firstHeading="create your account"
            secondHeading=""
            formComponent={<SignInFormComponent />}
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
