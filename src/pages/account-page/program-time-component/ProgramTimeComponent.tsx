import React from 'react';
import { StyledTimeContainer } from './StyledProgramTimeComponent';

interface IProps {
  date: string;
  time: string;
  name: string;
}

const ProgramTimeComponent: React.FC<IProps> = ({ date, time, name }) => {
  return (
    <>
      <h2>MY CLASSES</h2>
      <StyledTimeContainer>
        <p>{date}</p>
        <p style={{ color: 'rgba(119, 233, 172, 1)' }}>{time}</p>
        <p style={{ margin: '0' }}>{name}</p>
      </StyledTimeContainer>
    </>
  );
};

export default ProgramTimeComponent;
