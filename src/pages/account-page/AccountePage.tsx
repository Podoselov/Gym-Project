import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StyledAccountPage,
  StyledContainer,
  StyledHeaderContainer,
} from './StyledAccountPage';
import HeaderAccount from './header-account-page/HeaderAccount';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { StyledProgramWraper } from './program-account-component/StyledProgramAccountComponent';
import ProgramAccountComponent from './program-account-component/ProgramAccountComponent';
import { StyledProgramTimeWraper } from './program-time-component/StyledProgramTimeComponent';
import ProgramTimeComponent from './program-time-component/ProgramTimeComponent';
import ButtonAccountComponent from './button-accout-page/ButtonAccountComponent';
import { routes } from '../../utils/routes';
import MainFooterComponent from '../home-page/footer-section/main-footer/MainFooterComponent';
import { logoutUser } from '../../store/reducers/trainingReducers';

const AccountePage = () => {
  const user = useAppSelector((state) => state.trainingReducers.login);
  const users = useAppSelector((state) =>
    state.trainingReducers.training.filter(
      (element) => element.nameMail === user.nameMail
    )
  );
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const clickToButton = () => {
    navigate(routes.PRICING_ROUTE);
  };

  const clickToExitButton = () => {
    dispatch(logoutUser());
    navigate(routes.HOME_ROUTE);
  };

  return (
    <StyledAccountPage>
      <StyledContainer>
        <StyledHeaderContainer>
          <HeaderAccount name={user.nameMail} email={user.email} />
        </StyledHeaderContainer>
        <StyledProgramWraper>
          <ProgramAccountComponent
            program={users.map((element) => element.training)}
          />
        </StyledProgramWraper>
        <StyledProgramTimeWraper>
          <ProgramTimeComponent
            date="SUN, 12 JUN"
            time="17:00"
            name="BODY PUMP"
          />
        </StyledProgramTimeWraper>
        <ButtonAccountComponent
          actionButtonExit={clickToExitButton}
          actionButton={clickToButton}
        />
      </StyledContainer>
      <MainFooterComponent />
    </StyledAccountPage>
  );
};

export default AccountePage;
