import React from 'react';
import { Button, Container, ListItem } from '@mui/material';
import { StyledHeading } from '../home-page/community-section/StyledCommunityComponent';
import { StyledSpan } from '../home-page/mission-section/StyledMissionSection';
import {
  StyledCommunityWraper,
  StyledHeaderWraper,
  StyledWraper,
  StyledList,
  StyledButtonWraper,
  StyledButton,
} from './StyledCommunityPage';
import { CommunityArray } from '../home-page/community-section/community-card-component/CommunityArray';
import CommunityCardComponent from '../home-page/community-section/community-card-component/CommunityCardComponent';
import MainFooterComponent from '../home-page/footer-section/main-footer/MainFooterComponent';

const CommunityPage: React.FC = () => {
  return (
    <>
      <StyledWraper>
        <StyledHeaderWraper>
          <StyledHeading sx={{ margin: '0 0 114px 0', textAlign: 'center' }}>
            Community<StyledSpan>.</StyledSpan>
          </StyledHeading>
        </StyledHeaderWraper>
        <Container>
          <StyledCommunityWraper>
            <StyledList>
              {CommunityArray.map((element) => {
                return (
                  <ListItem key={element.name}>
                    <CommunityCardComponent
                      img={element.img}
                      text={element.text}
                      name={element.name}
                    />
                  </ListItem>
                );
              })}
            </StyledList>
          </StyledCommunityWraper>
          <StyledButtonWraper>
            <StyledButton>Feedback</StyledButton>
          </StyledButtonWraper>
        </Container>
      </StyledWraper>
      <MainFooterComponent />
    </>
  );
};

export default CommunityPage;
