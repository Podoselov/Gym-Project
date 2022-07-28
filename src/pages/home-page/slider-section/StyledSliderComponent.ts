import { Box, Container, IconButton, styled } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';

export const StyledWraper = styled(Box)(() => ({
  width: '100%',
  margin: '0',
  padding: '0',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: '71px',
  marginBottom: '189px',
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}));

export const StyledIconButton = styled(IconButton)(() => ({
  color: '#FCFCFF',
  backgroundColor: 'rgba(19, 19, 22, 1)',
  borderRadius: '50%',
  width: '37px',
  height: '37px',
  '&:hover': {
    backgroundColor: 'rgba(19, 19, 22, 1)',
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
  margin: '90px 0 115px',
  [theme.breakpoints.down('lg')]: {
    fontSize: '24px',
    margin: '81px 0 53px',
  },
}));

export const StyledSwiper = styled(Swiper)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const StyledSwiperSlide = styled(SwiperSlide)(() => ({
  display: 'inline-block',
}));
