import React from 'react';
import {
  StyledWraper,
  StyledContainer,
  StyledCardWraper,
  StyledHeading,
} from './StyledPriceComponent';
import { StyledSpan } from '../mission-section/StyledMissionSection';
import PriceComponentCard from './price-component/PriceComponentCard';

const PriceComponent: React.FC = () => {
  return (
    <StyledWraper>
      <StyledHeading>
        Pricing plan
        <StyledSpan>.</StyledSpan>
      </StyledHeading>
      <StyledCardWraper>
        <PriceComponentCard
          name="Basic"
          price={20}
          listItem={[
            'unlimited gym access',
            '1 training programs',
            'free fitness consultation',
          ]}
          styledBox={false}
        />
        <PriceComponentCard
          name="Premium"
          price={35}
          listItem={[
            'unlimited gym access',
            '5 training programs',
            'free fitness consultation',
            'personal trainer',
          ]}
          styledBox
        />
        <PriceComponentCard
          name="Elite"
          price={49}
          listItem={[
            'unlimited gym access',
            'all training programs',
            'free fitness consultation',
            'personal trainer',
            '50% off drinks',
          ]}
          styledBox={false}
        />
      </StyledCardWraper>
    </StyledWraper>
  );
};

export default PriceComponent;
