import React, { useCallback } from 'react';
import { StyledListItem, StyledLink, StyledButton } from './StyledSliderItem';
import { routes } from '../../../../utils/routes';
import { useAppDispatch } from '../../../../hooks/redux';
import { addTrainingId } from '../../../../store/reducers/trainingReducers';

interface IProps {
  name: string;
  imgUrl: string;
  id: string;
}

const SliderItem: React.FC<IProps> = ({ name, imgUrl, id }) => {
  const dispatch = useAppDispatch();

  const addTrainingIdToState = useCallback(() => {
    dispatch(addTrainingId(id));
  }, []);

  return (
    <StyledListItem>
      <StyledLink onClick={addTrainingIdToState} to={routes.WORKOUTS_ROUTE}>
        <img src={imgUrl} alt="фото тренировки" />
        <StyledButton>{name}</StyledButton>
      </StyledLink>
    </StyledListItem>
  );
};

export default SliderItem;
