import { Box, Container, styled } from '@mui/material';

export const StyledWraper = styled(Box)(() => ({
  width: '100%',
  margin: '0',
  padding: '0',
  backgroundColor: 'rgba(255, 255, 255, 1)',
}));

export const StyledHeadingBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
}));
