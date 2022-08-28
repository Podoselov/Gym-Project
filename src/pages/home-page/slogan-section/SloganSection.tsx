import React from 'react';
import {
  StyledBox,
  StyledButton,
  StyledContainer,
  StyledContentBox,
  StyledHeading,
  StyledImg,
  StyledSpan,
  StyledText,
  StyledWraper,
} from './StyledSloganSection';
import img from './slogan-img/heroImageHeader.png';
import { routes } from '../../../utils/routes';
import StyledImgBox from '../../img-box/StyledImgBox';
import { useAppSelector } from '../../../hooks/redux';

const SloganSection: React.FC = () => {
  const isLogin = useAppSelector(({ trainingReducers }) => {
    return trainingReducers.login;
  });

  return (
    <StyledWraper>
      <StyledImgBox />
      <StyledContainer>
        <StyledContentBox>
          <StyledBox>
            <StyledHeading>
              Get the best part of your day
              <StyledSpan>– you fit here.</StyledSpan>
            </StyledHeading>
            <StyledText>
              We provide serious fitness but withi
              <span style={{ display: 'block' }}>
                a fun and friendly, safe space.
              </span>
            </StyledText>
            <StyledButton
              to={
                isLogin.nameMail.length > 0
                  ? routes.ACCOUNT_ROUTE
                  : routes.LOGIN_ROUTE
              }
            >
              JOIN NOW
            </StyledButton>
            <StyledImg src={img} alt="слоган логотип" />
          </StyledBox>
        </StyledContentBox>
      </StyledContainer>
    </StyledWraper>
  );
};

export default SloganSection;
