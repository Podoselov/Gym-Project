import React from 'react';
import { StyledProgramContainer } from './StyledProgramAccountComponent';

export interface Programs {
  program: string[];
}

const ProgramAccountComponent: React.FC<Programs> = ({
  program = 'No subscription',
}) => {
  return (
    <StyledProgramContainer>
      <h2>MY PROGRAMS</h2>
      <p>{program}</p>
    </StyledProgramContainer>
  );
};

export default ProgramAccountComponent;
