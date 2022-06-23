import React from 'react';
import { StyledListItem, StyledLink, StyledButton } from './StyledSliderItem';
import { routes } from '../../../../utils/routes';

interface IProps {
  name: string;
  imgUrl: string;
}

const SliderItem: React.FC<IProps> = ({ name, imgUrl }) => {
  return (
    <StyledListItem>
      <StyledLink to={routes.CARD_ROUTE}>
        <img src={imgUrl} alt="фото тренировки" />
        <StyledButton>{name}</StyledButton>
      </StyledLink>
    </StyledListItem>
  );
};

export default SliderItem;
