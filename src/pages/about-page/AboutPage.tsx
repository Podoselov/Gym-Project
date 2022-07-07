import React from 'react';
import MissionSection from '../home-page/mission-section/MissionSection';
import { StyledBox, StyledImgContainer, StyledWraper } from './StyledAboutPage';
import boxingImg from './  about-page-img/boxerTraining.png';
import MainFooterComponent from '../home-page/footer-section/main-footer/MainFooterComponent';

const AboutPage: React.FC = () => {
  return (
    <>
      <StyledBox>
        <MissionSection />
      </StyledBox>
      <StyledWraper>
        <StyledImgContainer>
          <img src={boxingImg} alt="фото тренировки по боксу" />
        </StyledImgContainer>
      </StyledWraper>
      <MainFooterComponent />
    </>
  );
};

export default AboutPage;
