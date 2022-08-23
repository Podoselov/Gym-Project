import React from 'react';
import { StyledProgramTimeWraper } from './StyledProgramTimeComponent';

interface IProps {
  date: string;
  time: string;
  name: string;
}

const ProgramTimeComponent: React.FC<IProps> = ({ date, time, name }) => {
  return (
    <StyledProgramTimeWraper>
      <h2>MY CLASSES</h2>
    </StyledProgramTimeWraper>
  );
};

export default ProgramTimeComponent;
