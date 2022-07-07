import React from 'react';
import { Container } from '@mui/material';
import { StyledHeadingBox, StyledWraper } from './StyledWorkoutsPage';
import { StyledSpan } from '../home-page/mission-section/StyledMissionSection';
import { StyledHeading } from '../home-page/slider-section/StyledSliderComponent';
import { workouts } from './workouts-component/workouts-object/workouts';
import WorkoutsComponent from './workouts-component/WorkoutsComponent';

const WorkoutsPage: React.FC = () => {
  return (
    <StyledWraper>
      <Container>
        <StyledHeadingBox>
          <StyledHeading>
            Training programs
            <StyledSpan>.</StyledSpan>
          </StyledHeading>
        </StyledHeadingBox>
      </Container>
      <Container>
        {workouts.map(({ img, buttonText, textSecond, textFirst }) => {
          return (
            <WorkoutsComponent
              img={img}
              buttonText={buttonText}
              textFirst={textFirst}
              textSecond={textSecond}
            />
          );
        })}
      </Container>
    </StyledWraper>
  );
};

export default WorkoutsPage;
