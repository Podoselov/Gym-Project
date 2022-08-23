import React from 'react';
import {
  StyledButtonLink,
  StyledButtonLogIn,
} from './StyledNavigationMenuComponent';

interface IProps {
  nameButtonSignUp: string;
  nameButtonLogIn: string;
  routesSignUp: string;
  routesLogIn: string;
  clickAction?: () => void;
}

const NavigationButtonComponent: React.FC<IProps> = ({
  nameButtonLogIn,
  nameButtonSignUp,
  routesLogIn,
  routesSignUp,
  clickAction,
}) => {
  return (
    <>
      <StyledButtonLink to={routesSignUp}>{nameButtonSignUp}</StyledButtonLink>
      <StyledButtonLogIn onClick={clickAction} to={routesLogIn}>
        {nameButtonLogIn}
      </StyledButtonLogIn>
    </>
  );
};

export default NavigationButtonComponent;
