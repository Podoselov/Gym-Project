import { Box, styled } from '@mui/material';
import { Swiper } from 'swiper/react';

export const StyledWraper = styled(Box)(({ theme }) => ({
  width: '100%',
  margin: '0',
  padding: '161px 0 288px',
  display: 'flex',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    padding: '53px 0 0 0',
  },
}));

export const StyledHeadingWraper = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  marginRight: '112px',
  [theme.breakpoints.down('lg')]: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export const StyledSwiper = styled(Swiper)(({ theme }) => ({
  width: '100%',
  height: '100%',
  '& .swiper-pagination': {
    display: 'none',
  },
  [theme.breakpoints.down('lg')]: {
    height: '520px',
    maxWidth: '280px',
    '& .swiper-pagination': {
      display: 'block',
      '& .swiper-pagination-bullet-active': {
        background: 'var(--swiper-pagination-bullet-inactive-color,#000)',
      },
    },
    '& .swiper-wrapper': {
      height: '520px',
    },
    '& .swiper-slide': {
      display: 'flex',
      justifyContent: 'center',
    },
  },
}));

export const StyledSwiperWraper = styled(Box)(() => ({
  display: 'inline-block',
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  marginLeft: '103px',
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
  marginLeft: '103px',
  marginBottom: '347px',
  [theme.breakpoints.down('lg')]: {
    fontSize: '24px',
    marginBottom: '54px',
  },
}));
