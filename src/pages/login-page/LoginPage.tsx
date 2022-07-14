import React from 'react';
import { StyledWraper } from './StyledLoginPage';
import { LoginForm } from '../../components/login-component/form-login-component/LoginForm';
import LoginModalComponent from '../../components/login-component/LoginModalComponent';
import MainFooterComponent from '../home-page/footer-section/main-footer/MainFooterComponent';

const LoginPage: React.FC = () => {
  return (
    <>
      <StyledWraper>
        <LoginModalComponent
          firstHeading="WELCOME BACK,"
          secondHeading="PLEASE LOGIN TO YOU ACCOUNT"
          formComponent={<LoginForm />}
        />
      </StyledWraper>
      <MainFooterComponent />
    </>
  );
};

export default LoginPage;
