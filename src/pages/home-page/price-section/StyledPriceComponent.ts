import { Box, Container, styled } from '@mui/material';
import { Swiper } from 'swiper/react';

export const StyledWraper = styled(Box)(({ theme }) => ({
  width: '100%',
  margin: '0',
  padding: '0',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  [theme.breakpoints.down('lg')]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

export const StyledContainer = styled(Container)(() => ({
  paddingBottom: '180px',
}));

export const StyledCardWraper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}));

export const StyledHeading = styled('h1')(({ theme }) => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '800',
  fontSize: '50px',
  lineHeight: '50px',
  textAlign: 'center',
  color: '#131316',
  marginBottom: '115px',
  [theme.breakpoints.down('lg')]: {
    fontSize: '24px',
    marginBottom: '53px',
  },
}));

export const StyledSwiper = styled(Swiper)(({ theme }) => ({
  display: 'none',
  '& .swiper-pagination': {
    display: 'none',
  },
  [theme.breakpoints.down('lg')]: {
    display: 'inline-block',
    width: '100%',
    height: '100%',
    '& .swiper-pagination': {
      display: 'block',
      '& .swiper-pagination-bullet-active': {
        background: 'var(--swiper-pagination-bullet-inactive-color,#000)',
      },
    },
    '& .swiper-wrapper': {
      height: '579px',
    },
    '& .swiper-slide': {
      display: 'flex',
      justifyContent: 'center',
    },
  },
}));
