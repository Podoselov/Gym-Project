import React from 'react';
import { StyledWraper } from './StyledRegistrationPage';
import LoginModalComponent from '../../components/login-component/LoginModalComponent';
import MainFooterComponent from '../home-page/footer-section/main-footer/MainFooterComponent';
import SignInFormComponent from '../../components/login-component/form-signin-component/SignInFormComponent';

const RegistrationPage: React.FC = () => {
  return (
    <>
      <StyledWraper>
        <LoginModalComponent
          firstHeading="create your account"
          secondHeading=""
          formComponent={<SignInFormComponent />}
        />
      </StyledWraper>
      <MainFooterComponent />
    </>
  );
};

export default RegistrationPage;
