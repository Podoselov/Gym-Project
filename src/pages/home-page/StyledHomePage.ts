import { Box, styled } from '@mui/material';

export const StyledWraper = styled(Box)(({ theme }) => ({
  padding: '175px 0 180px',
  [theme.breakpoints.down('lg')]: {
    padding: '125px 0 28px ',
  },
}));
