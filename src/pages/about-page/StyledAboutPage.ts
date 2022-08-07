import { Box, Container, styled } from '@mui/material';

export const StyledWraper = styled(Box)(() => ({
  width: '100%',
  margin: '0',
  padding: '0',
  backgroundColor: 'rgba(255, 255, 255, 1)',
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  padding: '90px 0 55px',
  [theme.breakpoints.down('lg')]: {
    padding: '50px 0 10px',
  },
}));

export const StyledImgContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  minHeight: '645px',
  marginBottom: '65px',
  '& img': {
    width: '100%',
    height: '100%',
    position: 'absolute',
    objectFit: 'cover',
    top: '0',
    left: '0',
  },
  [theme.breakpoints.down('lg')]: {
    marginBottom: '0',
    minHeight: '205px',
  },
}));
