import React from 'react';
import SloganSection from './slogan-section/SloganSection';
import MissionSection from './mission-section/MissionSection';
import SliderComponent from './slider-section/SliderComponent';
import PriceComponent from './price-section/PriceComponent';

const HomePage: React.FC = () => {
  return (
    <>
      <SloganSection />
      <MissionSection />
      <SliderComponent />
      <PriceComponent />
    </>
  );
};

export default HomePage;
