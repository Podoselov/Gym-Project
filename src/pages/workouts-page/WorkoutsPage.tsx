import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import { StyledHeadingBox, StyledWraper } from './StyledWorkoutsPage';
import { StyledSpan } from '../home-page/mission-section/StyledMissionSection';
import { StyledHeading } from '../home-page/slider-section/StyledSliderComponent';
import { workouts } from './workouts-component/workouts-object/workouts';
import WorkoutsComponent from './workouts-component/WorkoutsComponent';
import MainFooterComponent from '../home-page/footer-section/main-footer/MainFooterComponent';
import { useAppSelector } from '../../hooks/redux';

const WorkoutsPage: React.FC = () => {
  const actionTraining = useAppSelector(
    (state) => state.trainingReducers.trainingId
  );

  useEffect(() => {
    return () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }, []);

  return (
    <>
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
          {workouts.map(({ img, buttonText, textSecond, textFirst, id }) => {
            return id === actionTraining ? (
              <WorkoutsComponent
                img={img}
                buttonText={buttonText}
                textFirst={textFirst}
                textSecond={textSecond}
                idForScroll={id}
                key={id}
              />
            ) : null;
          })}
        </Container>
        <Container>
          {workouts.map(({ img, buttonText, textSecond, textFirst, id }) => {
            return id !== actionTraining ? (
              <WorkoutsComponent
                img={img}
                buttonText={buttonText}
                textFirst={textFirst}
                textSecond={textSecond}
                idForScroll={id}
                key={id}
              />
            ) : null;
          })}
        </Container>
      </StyledWraper>
      <MainFooterComponent />
    </>
  );
};

export default WorkoutsPage;
