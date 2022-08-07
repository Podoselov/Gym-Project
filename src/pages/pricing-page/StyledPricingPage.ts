import { Box, styled } from '@mui/material';

export const StyledContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 1)',
  marginBottom: '70px',
  marginTop: '90px',
  [theme.breakpoints.down('lg')]: {
    marginTop: '0px',
    marginBottom: '29px',
  },
}));
