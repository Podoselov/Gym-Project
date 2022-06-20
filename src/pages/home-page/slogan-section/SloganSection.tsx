import React from 'react';
import {
  StyledWraper,
  StyledContainer,
  StyledBox,
  StyledHeading,
  StyledSpan,
  StyledButton,
  StyledText,
  StyledImg,
  StyledContentBox,
} from './StyledSloganSection';
import img from './slogan-img/heroImageHeader.png';

const SloganSection: React.FC = () => {
  return (
    <StyledWraper>
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
            <StyledButton>JOIN NOW</StyledButton>
            <StyledImg src={img} alt="слоган логотип" />
          </StyledBox>
        </StyledContentBox>
      </StyledContainer>
    </StyledWraper>
  );
};

export default SloganSection;
