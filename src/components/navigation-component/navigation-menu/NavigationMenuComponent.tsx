import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StyledButton,
  StyledButtonContainer,
  StyledCloseIcon,
  StyledContainer,
  StyledContainerLink,
  StyledHeaderWraper,
  StyledMenuLink,
  StyledWraper,
} from './StyledNavigationMenuComponent';
import MainLogoComponent from '../main-logo/MainLogoComponent';
import { routes } from '../../../utils/routes';
import NavigationButtonComponent from './NavigationButtonComponent';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { logoutUser } from '../../../store/reducers/trainingReducers';

const NavigationMenuComponent: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const loginName = useAppSelector(
    ({ trainingReducers }) => trainingReducers.login.nameMail
  );

  const exitFromAccount = () => dispatch(logoutUser());

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
          {loginName.length > 0 ? (
            <NavigationButtonComponent
              nameButtonSignUp="Account"
              nameButtonLogIn="Exit"
              routesSignUp={routes.ACCOUNT_ROUTE}
              routesLogIn={routes.HOME_ROUTE}
              clickAction={exitFromAccount}
            />
          ) : (
            <NavigationButtonComponent
              nameButtonSignUp="Sign up"
              nameButtonLogIn="Log in"
              routesSignUp={routes.SIGN_UP_ROUTE}
              routesLogIn={routes.LOGIN_ROUTE}
            />
          )}
        </StyledButtonContainer>
      </StyledContainer>
    </StyledWraper>
  );
};

export default NavigationMenuComponent;
