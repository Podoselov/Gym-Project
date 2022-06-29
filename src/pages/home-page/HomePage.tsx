import React from 'react';
import SloganSection from './slogan-section/SloganSection';
import MissionSection from './mission-section/MissionSection';
import SliderComponent from './slider-section/SliderComponent';
import PriceComponent from './price-section/PriceComponent';
import CommunityComponent from './community-section/CommunityComponent';
import FAQSectionComponent from './faq-section/FAQSectionComponent';

const HomePage: React.FC = () => {
  return (
    <>
      <SloganSection />
      <MissionSection />
      <SliderComponent />
      <PriceComponent />
      <CommunityComponent />
      <FAQSectionComponent />
    </>
  );
};

export default HomePage;
