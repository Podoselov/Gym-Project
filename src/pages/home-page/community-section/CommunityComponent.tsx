import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import {
  StyledBox,
  StyledHeading,
  StyledHeadingWraper,
  StyledSwiper,
  StyledWraper,
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
      <StyledSwiper
        modules={[Navigation, Pagination]}
        navigation={{ nextEl: '#swiper-forward', prevEl: '#swiper-back' }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            autoHeight: false,
            initialSlide: 0,
          },
          640: {
            slidesPerView: 2.5,
            autoHeight: true,
            spaceBetween: 30,
          },
        }}
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
      </StyledSwiper>
    </StyledWraper>
  );
};

export default CommunityComponent;
