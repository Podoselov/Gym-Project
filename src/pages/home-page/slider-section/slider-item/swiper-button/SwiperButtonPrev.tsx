import React from 'react';
import { useSwiper } from 'swiper/react';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { StyledIconButton } from '../../StyledSliderComponent';

const SwiperButtonPrev: React.FC = () => {
  const swiper = useSwiper();

  const showPrevSlide = () => {
    return swiper.slidePrev();
  };

  return (
    <StyledIconButton onClick={showPrevSlide} sx={{ marginRight: '48px' }}>
      <NavigateBeforeIcon />
    </StyledIconButton>
  );
};

export default SwiperButtonPrev;
