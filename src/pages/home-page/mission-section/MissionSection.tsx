import React from 'react';
import { Container } from '@mui/material';
import {
  StyledButton,
  StyledButtonIcon,
  StyledHeading,
  StyledSpan,
  StyledText,
  StyledWraper,
} from './StyledMissionSection';

const MissionSection: React.FC = () => {
  return (
    <StyledWraper>
      <Container>
        <StyledHeading>
          Our mission
          <StyledSpan>.</StyledSpan>
        </StyledHeading>
        <StyledText sx={{ paddingBottom: '38px' }}>
          We are distinguished by our unsurpassed motivating atmosphere,
          knowledgeable staff, and premier exercise equipment, which supports
          our members in meeting their individual fitness goals.
        </StyledText>
        <StyledText>
          The strength of our heart-felt identity is utilized to inspire every
          person that steps foot into our gyms to better themselves.
        </StyledText>
        <StyledButton>
          Join Now
          <StyledButtonIcon />
        </StyledButton>
      </Container>
    </StyledWraper>
  );
};

export default MissionSection;
