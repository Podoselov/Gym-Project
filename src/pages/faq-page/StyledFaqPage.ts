import { Box, styled } from '@mui/material';

export const StyledContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 1)',
  marginTop: '57px',
  marginBottom: '333px',
  [theme.breakpoints.down('lg')]: {
    marginBottom: '20px',
  },
}));
