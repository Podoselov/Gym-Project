import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import SliderItemArray from './slider-item/SliderItemsArray';
import {
  StyledContainer,
  StyledHeading,
  StyledWraper,
} from './StyledSliderComponent';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import { StyledSpan } from '../mission-section/StyledMissionSection';
import { StyledSwiper } from './slider-item/StyledSliderItem';
import SliderItem from './slider-item/SliderItem';
import SwiperButtonPrev from './slider-item/swiper-button/SwiperButtonPrev';
import SwiperButtonNext from './slider-item/swiper-button/SwiperButtonNext';

const SliderComponent: React.FC = () => {
  return (
    <StyledWraper>
      <StyledHeading>
        Training programs
        <StyledSpan>.</StyledSpan>
      </StyledHeading>
      <StyledSwiper
        modules={[Pagination, Navigation]}
        loop
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            loop: false,
            autoHeight: false,
            slidesPerView: 2,
            initialSlide: 0,
            slidesPerGroup: 2,
          },
          640: {
            slidesPerView: 4,
            centeredSlides: true,
            autoHeight: true,
          },
        }}
      >
        {SliderItemArray.map(({ name, imgUrl, id }) => {
          return (
            <SwiperSlide key={id}>
              <SliderItem name={name} imgUrl={imgUrl} id={id} />
            </SwiperSlide>
          );
        })}
        <StyledContainer>
          <SwiperButtonPrev idSlider />
          <SwiperButtonNext idSlider />
        </StyledContainer>
      </StyledSwiper>
    </StyledWraper>
  );
};

export default SliderComponent;
