import React from 'react';
import PriceComponent from '../home-page/price-section/PriceComponent';
import { StyledContainer } from './StyledPricingPage';
import MainFooterComponent from '../home-page/footer-section/main-footer/MainFooterComponent';

const PricingPage: React.FC = () => {
  return (
    <>
      <StyledContainer>
        <PriceComponent />
      </StyledContainer>
      <MainFooterComponent />
    </>
  );
};

export default PricingPage;
