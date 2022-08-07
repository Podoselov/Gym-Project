import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import SliderItemArray from './slider-item/SliderItemsArray';
import {
  StyledContainer,
  StyledHeading,
  StyledWraper,
} from './StyledSliderComponent';
import SliderItem from './slider-item/SliderItem';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import SwiperButtonNext from './slider-item/swiper-button/SwiperButtonNext';
import SwiperButtonPrev from './slider-item/swiper-button/SwiperButtonPrev';
import { StyledSpan } from '../mission-section/StyledMissionSection';
import { StyledSwiper } from './slider-item/StyledSliderItem';

const SliderComponent: React.FC = () => {
  return (
    <StyledWraper>
      <StyledHeading>
        Training programs
        <StyledSpan>.</StyledSpan>
      </StyledHeading>
      <StyledSwiper
        loop
        modules={[Pagination, Navigation]}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            autoHeight: false,
            slidesPerView: 2,
            initialSlide: 0,
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
