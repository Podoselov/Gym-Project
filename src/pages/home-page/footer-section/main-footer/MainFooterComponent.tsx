import React from 'react';
import { Box, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import {
  StyledLink,
  StyledNavBar,
} from '../../../../components/navigation-component/StyledNavigationComponent';
import {
  StyledContainer,
  StyledIconWraper,
  StyledList,
  StyledWraper,
  StyledBox,
} from './StyledMainFooterComponent';
import MainLogoComponent from '../../../../components/navigation-component/main-logo/MainLogoComponent';
import { routes } from '../../../../utils/routes';

const MainFooterComponent: React.FC = () => {
  return (
    <StyledWraper>
      <StyledContainer>
        <StyledNavBar sx={{ alignItems: 'flex-start' }}>
          <Box>
            <MainLogoComponent />
          </Box>
          <StyledBox>
            <StyledList>
              <StyledLink to={routes.HOME_ROUTE}>Home</StyledLink>
              <StyledLink to={routes.ABOUT_ROUTE}>About</StyledLink>
              <StyledLink to={routes.WORKOUTS_ROUTE}>Workouts</StyledLink>
            </StyledList>
            <StyledList>
              <StyledLink to={routes.PRICING_ROUTE}>Pricing</StyledLink>
              <StyledLink to={routes.COMMUNITY_ROUTE}>Community</StyledLink>
            </StyledList>
            <StyledList>
              <StyledLink to={routes.FAQ_ROUTE}>FAQ</StyledLink>
            </StyledList>
          </StyledBox>
          <StyledIconWraper>
            <IconButton aria-label="facebook">
              <FacebookIcon fontSize="large" sx={{ color: 'white' }} />
            </IconButton>
            <IconButton aria-label="instagram">
              <InstagramIcon fontSize="large" sx={{ color: 'white' }} />
            </IconButton>
            <IconButton aria-label="youtube">
              <YouTubeIcon fontSize="large" sx={{ color: 'white' }} />
            </IconButton>
          </StyledIconWraper>
        </StyledNavBar>
      </StyledContainer>
    </StyledWraper>
  );
};

export default MainFooterComponent;
