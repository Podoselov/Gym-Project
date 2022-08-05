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

const SloganSection: React.FC = () => {
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
            <StyledButton to={routes.LOGIN_ROUTE}>JOIN NOW</StyledButton>
            <StyledImg src={img} alt="слоган логотип" />
          </StyledBox>
        </StyledContentBox>
      </StyledContainer>
    </StyledWraper>
  );
};

export default SloganSection;
