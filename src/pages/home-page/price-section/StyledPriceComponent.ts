import { Box, Container, styled } from '@mui/material';

export const StyledWraper = styled(Box)(() => ({
  width: '100%',
  margin: '0',
  padding: '0',
  backgroundColor: 'rgba(255, 255, 255, 1)',
}));

export const StyledContainer = styled(Container)(() => ({}));

export const StyledHeading = styled('h1')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '800',
  fontSize: '50px',
  lineHeight: '50px',
  textAlign: 'center',
  color: '#131316',
  marginBottom: '115px',
}));
