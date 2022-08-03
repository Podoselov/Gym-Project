import { Box, styled } from '@mui/material';

export const StyledWraper = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: '568px',
  margin: '0px',
  padding: '0px',
  backgroundColor: '#FFFFFF',
  [theme.breakpoints.down('lg')]: {
    backgroundColor: '#000',
  },
}));
