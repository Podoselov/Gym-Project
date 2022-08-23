import { Box, styled } from '@mui/material';

export const StyledAccountPage = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  margin: '0',
  padding: '0',
  backgroundColor: '#FFFFFF',
}));

export const StyledContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  margin: '0',
  padding: '0 80px',
  [theme.breakpoints.down('lg')]: {
    padding: '0 20px',
  },
}));

export const StyledHeaderContainer = styled(Box)(() => ({
  margin: '20px 0',
}));
