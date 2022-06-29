import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import {
  StyledHeading,
  StyledHeadingWraper,
  StyledWraper,
  StyledBox,
  StyledSwiperWraper,
} from './StyledCommunityComponent';
import { StyledSpan } from '../mission-section/StyledMissionSection';
import SwiperButtonPrev from '../slider-section/slider-item/swiper-button/SwiperButtonPrev';
import SwiperButtonNext from '../slider-section/slider-item/swiper-button/SwiperButtonNext';
import 'swiper/css';
import 'swiper/css/navigation';
import { CommunityArray } from './community-card-component/CommunityArray';
import CommunityCardComponent from './community-card-component/CommunityCardComponent';

const CommunityComponent: React.FC = () => {
  return (
    <StyledWraper>
      <StyledHeadingWraper>
        <StyledHeading>
          Community<StyledSpan>.</StyledSpan>
        </StyledHeading>
        <StyledBox>
          <SwiperButtonPrev idSlider={false} />
          <SwiperButtonNext idSlider={false} />
        </StyledBox>
      </StyledHeadingWraper>
      <Swiper
        modules={[Navigation]}
        navigation={{ nextEl: '#swiper-forward', prevEl: '#swiper-back' }}
        slidesPerView={2.5}
        autoHeight
        spaceBetween={30}
      >
        {CommunityArray.map((element) => {
          return (
            <SwiperSlide>
              <CommunityCardComponent
                img={element.img}
                text={element.text}
                name={element.name}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledWraper>
  );
};

export default CommunityComponent;
