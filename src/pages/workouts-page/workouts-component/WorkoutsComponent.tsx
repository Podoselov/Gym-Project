import React from 'react';
import {
  StyledImgWraper,
  StyledText,
  StyledWorkoutsWraper,
  StyledBox,
} from './StyledWorkoutsComponent';

interface IProps {
  img: string;
  buttonText: string;
  textFirst: string;
  textSecond: string;
}

const WorkoutsComponent: React.FC<IProps> = ({
  img,
  buttonText,
  textFirst,
  textSecond,
}) => {
  return (
    <StyledWorkoutsWraper>
      <StyledImgWraper>
        <img src={img} alt="фото тренировки" />
        <p>{buttonText}</p>
      </StyledImgWraper>
      <StyledBox>
        <StyledText>{textFirst}</StyledText>
        <StyledText>{textSecond}</StyledText>
      </StyledBox>
    </StyledWorkoutsWraper>
  );
};

export default WorkoutsComponent;
