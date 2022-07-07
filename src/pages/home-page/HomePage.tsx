import React from 'react';
import SloganSection from './slogan-section/SloganSection';
import MissionSection from './mission-section/MissionSection';
import SliderComponent from './slider-section/SliderComponent';
import PriceComponent from './price-section/PriceComponent';
import CommunityComponent from './community-section/CommunityComponent';
import FAQSectionComponent from './faq-section/FAQSectionComponent';
import FooterComponent from './footer-section/FooterComponent';
import MainFooterComponent from './footer-section/main-footer/MainFooterComponent';
import { StyledWraper } from './StyledHomePage';

const HomePage: React.FC = () => {
  return (
    <>
      <SloganSection />
      <StyledWraper>
        <MissionSection />
      </StyledWraper>
      <SliderComponent />
      <PriceComponent />
      <CommunityComponent />
      <FAQSectionComponent />
      <FooterComponent />
      <MainFooterComponent />
    </>
  );
};

export default HomePage;
