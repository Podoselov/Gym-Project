import React from 'react';
import { StyledWraper } from './StyledImgBoxWraper';
import img from '../home-page/slogan-section/slogan-img/heroImageHeader.png';

const StyledImgBox: React.FC = () => {
  return (
    <StyledWraper>
      <img src={img} alt="фото тренировки" />
    </StyledWraper>
  );
};

export default StyledImgBox;
