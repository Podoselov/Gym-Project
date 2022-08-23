import React from 'react';
import {
  StyledAccountPage,
  StyledContainer,
  StyledHeaderContainer,
} from './StyledAccountPage';
import HeaderAccount from './header-account-page/HeaderAccount';
import { useAppSelector } from '../../hooks/redux';
import { StyledProgramWraper } from './program-account-component/StyledProgramAccountComponent';
import ProgramAccountComponent from './program-account-component/ProgramAccountComponent';
import { StyledProgramTimeWraper } from './program-time-component/StyledProgramTimeComponent';
import ProgramTimeComponent from './program-time-component/ProgramTimeComponent';

const AccountePage = () => {
  const user = useAppSelector((state) => state.trainingReducers.login);

  return (
    <StyledAccountPage>
      <StyledContainer>
        <StyledHeaderContainer>
          <HeaderAccount name={user.nameMail} email={user.email} />
        </StyledHeaderContainer>
        <StyledProgramWraper>
          <ProgramAccountComponent program="premium" />
        </StyledProgramWraper>
        <StyledProgramTimeWraper>
          <ProgramTimeComponent
            date="SUN, 12 JUN"
            time="17:00"
            name="BODY PUMP"
          />
        </StyledProgramTimeWraper>
      </StyledContainer>
    </StyledAccountPage>
  );
};

export default AccountePage;
