import React from 'react';
import { useSwiper } from 'swiper/react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { StyledIconButton } from '../../StyledSliderComponent';
import { IProps } from './SwiperButtonPrev';

const SwiperButtonNext: React.FC<IProps> = ({ idSlider }) => {
  const swiper = useSwiper();

  const showNextSlide = () => {
    return idSlider ? swiper.slideNext() : null;
  };

  return (
    <StyledIconButton id="swiper-forward" onClick={showNextSlide}>
      <NavigateNextIcon />
    </StyledIconButton>
  );
};

export default SwiperButtonNext;
