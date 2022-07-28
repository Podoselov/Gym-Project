import { Box, styled } from '@mui/material';

export const StyledWraper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  margin: '0px',
  padding: '0px',
  top: '0',
  display: 'none',
  '& img': {
    width: '100%',
    minHeight: '598px',
    position: 'absolute',
    objectFit: 'cover',
    top: '0',
    left: '0',
  },
  [theme.breakpoints.down('lg')]: {
    display: 'block',
  },
}));
