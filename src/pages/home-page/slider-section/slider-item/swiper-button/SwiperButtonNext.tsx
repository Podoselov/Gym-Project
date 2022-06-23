import React from 'react';
import { useSwiper } from 'swiper/react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { StyledIconButton } from '../../StyledSliderComponent';

const SwiperButtonNext: React.FC = () => {
  const swiper = useSwiper();

  const showNextSlide = () => {
    return swiper.slideNext();
  };

  return (
    <StyledIconButton onClick={showNextSlide}>
      <NavigateNextIcon />
    </StyledIconButton>
  );
};

export default SwiperButtonNext;
