import React from 'react';
import {
  StyledWraper,
  StyledContainer,
  StyledHeading,
} from './StyledPriceComponent';
import { StyledSpan } from '../mission-section/StyledMissionSection';

const PriceComponent: React.FC = () => {
  return (
    <StyledWraper>
      <StyledContainer>
        <StyledHeading>
          Pricing plan
          <StyledSpan>.</StyledSpan>
        </StyledHeading>
      </StyledContainer>
    </StyledWraper>
  );
};

export default PriceComponent;
