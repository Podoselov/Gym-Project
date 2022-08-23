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
import { logoutUser } from '../../store/reducers/trainingReducers';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

const NavigationComponent: React.FC = () => {
  const loginName = useAppSelector(
    ({ trainingReducers }) => trainingReducers.login.nameMail
  );

  const dispatch = useAppDispatch();

  const exitFromAccount = () => dispatch(logoutUser());

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
            {loginName.length > 0 ? (
              <>
                <StyledLogInButton to={routes.ACCOUNT_ROUTE}>
                  Account
                </StyledLogInButton>
                <StyledSignInButton
                  onClick={exitFromAccount}
                  to={routes.HOME_ROUTE}
                >
                  Exit
                </StyledSignInButton>
              </>
            ) : (
              <>
                <StyledLogInButton to={routes.LOGIN_ROUTE}>
                  Log in
                </StyledLogInButton>
                <StyledSignInButton to={routes.SIGN_UP_ROUTE}>
                  Sign in
                </StyledSignInButton>
              </>
            )}
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
