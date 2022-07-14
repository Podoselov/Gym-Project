import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import SliderItemArray from './slider-item/SliderItemsArray';
import {
  StyledWraper,
  StyledContainer,
  StyledHeading,
} from './StyledSliderComponent';
import SliderItem from './slider-item/SliderItem';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperButtonNext from './slider-item/swiper-button/SwiperButtonNext';
import SwiperButtonPrev from './slider-item/swiper-button/SwiperButtonPrev';
import { StyledSpan } from '../mission-section/StyledMissionSection';

const SliderComponent: React.FC = () => {
  return (
    <StyledWraper>
      <StyledHeading>
        Training programs
        <StyledSpan>.</StyledSpan>
      </StyledHeading>
      <Swiper
        centeredSlides
        modules={[Navigation]}
        loop
        slidesPerView={4}
        autoHeight
      >
        {SliderItemArray.map(({ name, imgUrl, id }) => {
          return (
            <SwiperSlide>
              <SliderItem name={name} imgUrl={imgUrl} id={id} />
            </SwiperSlide>
          );
        })}
        <StyledContainer>
          <SwiperButtonPrev idSlider />
          <SwiperButtonNext idSlider />
        </StyledContainer>
      </Swiper>
    </StyledWraper>
  );
};

export default SliderComponent;
