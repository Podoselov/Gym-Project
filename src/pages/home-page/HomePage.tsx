import React from 'react';
import SloganSection from './slogan-section/SloganSection';
import MissionSection from './mission-section/MissionSection';
import SliderComponent from './slider-section/SliderComponent';
import PriceComponent from './price-section/PriceComponent';
import { StyledWraper } from './StyledHomePage';
import CommunityComponent from './community-section/CommunityComponent';
import FAQSectionComponent from './faq-section/FAQSectionComponent';
import FooterComponent from './footer-section/FooterComponent';

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
      {/* <MainFooterComponent /> */}
    </>
  );
};

export default HomePage;
