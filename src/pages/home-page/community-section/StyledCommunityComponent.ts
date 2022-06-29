import { styled, Box } from '@mui/material';

export const StyledWraper = styled(Box)(() => ({
  width: '100%',
  margin: '0',
  padding: '161px 0 288px',
  display: 'flex',
  backgroundColor: 'rgba(255, 255, 255, 1)',
}));

export const StyledHeadingWraper = styled(Box)(() => ({
  display: 'inline-block',
  marginRight: '112px',
}));

export const StyledSwiperWraper = styled(Box)(() => ({
  display: 'inline-block',
}));

export const StyledBox = styled(Box)(() => ({
  marginLeft: '103px',
}));

export const StyledHeading = styled('h1')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '800',
  fontSize: '50px',
  lineHeight: '50px',
  marginLeft: '103px',
  marginBottom: '347px',
}));
