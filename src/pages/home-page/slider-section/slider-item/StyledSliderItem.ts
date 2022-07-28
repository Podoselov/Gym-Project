import { Button, ListItem, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { Swiper } from 'swiper/react';

export const StyledListItem = styled(ListItem)(() => ({
  display: 'inline-block',
}));

export const StyledSwiper = styled(Swiper)(({ theme }) => ({
  width: '100%',
  height: '100%',
  '& .swiper-pagination': {
    display: 'none',
  },
  [theme.breakpoints.down('lg')]: {
    height: '365px',
    maxWidth: '308px',
    '& .swiper-wrapper': {
      height: '335px',
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gridTemplateRows: 'repeat(2,1fr)',
      gridAutoFlow: 'column',
    },
    '& .swiper-pagination': {
      display: 'block',
      '& .swiper-pagination-bullet-active': {
        background: 'var(--swiper-pagination-bullet-inactive-color,#000)',
      },
    },
    '& .swiper-slide': {
      height: '135px',
      width: '130px',
    },
  },
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  display: 'inline-block',
  color: '#111',
  cursor: 'pointer',
  textDecoration: 'none',
  fontWeight: '500',
  height: '350px',
  position: 'relative',
  transition: 'all ease-out 0.3s',
  '&:hover': {
    transform: 'translateY(-10px)',
  },
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  [theme.breakpoints.down('lg')]: {
    height: '135px',
    width: '135px',
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  padding: '4px 14px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '18px',
  color: '#131316',
  position: 'absolute',
  bottom: '20px',
  left: '20px',
  borderRadius: '0',
  '&:hover': {
    backgroundColor: '#CACACA',
  },
  [theme.breakpoints.down('lg')]: {
    bottom: '10px',
    left: '0',
  },
}));
