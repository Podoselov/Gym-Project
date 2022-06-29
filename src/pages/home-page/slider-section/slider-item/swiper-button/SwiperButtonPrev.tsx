import React from 'react';
import { useSwiper } from 'swiper/react';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { StyledIconButton } from '../../StyledSliderComponent';

export interface IProps {
  idSlider: boolean;
}

const SwiperButtonPrev: React.FC<IProps> = ({ idSlider }) => {
  const swiper = useSwiper();

  const showPrevSlide = () => {
    return idSlider ? swiper.slidePrev() : null;
  };

  return (
    <StyledIconButton
      id="swiper-back"
      onClick={showPrevSlide}
      sx={{ marginRight: '48px' }}
    >
      <NavigateBeforeIcon />
    </StyledIconButton>
  );
};

export default SwiperButtonPrev;
