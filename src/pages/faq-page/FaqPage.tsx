import React from 'react';
import FAQSectionComponent from '../home-page/faq-section/FAQSectionComponent';
import MainFooterComponent from '../home-page/footer-section/main-footer/MainFooterComponent';
import { StyledContainer } from './StyledFaqPage';

const FaqPage: React.FC = () => {
  return (
    <>
      <StyledContainer>
        <FAQSectionComponent />
      </StyledContainer>
      <MainFooterComponent />
    </>
  );
};

export default FaqPage;
