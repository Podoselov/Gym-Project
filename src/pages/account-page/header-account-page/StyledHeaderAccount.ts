import { Box, styled } from '@mui/material';

export const StyledHeaderWraper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  margin: '0',
  padding: '0',
  backgroundColor: '#000',
  [theme.breakpoints.down('lg')]: {
    backgroundColor: 'rgba(30, 30, 30, 1)',
  },
}));

export const StyledHeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
  },
}));

export const StyledImgWraper = styled(Box)(({ theme }) => ({
  margin: '20px 70px 20px 40px',
  [theme.breakpoints.down('lg')]: {
    '& img': {
      width: '98px',
      height: '101px',
    },
    margin: '4px 0px 9px 7px',
  },
}));

export const StyledUserNameWraper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  '& h2': {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '40px',
    lineHeight: '48px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: 'rgba(119, 233, 172, 1)',
    margin: '0',
    [theme.breakpoints.down('lg')]: {
      fontSize: '16px',
      lineHeight: '19px',
    },
  },
  '& p': {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '32px',
    lineHeight: '39px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    margin: '0',
    color: 'rgba(255, 255, 255, 1)',
    display: 'inline-block',
    [theme.breakpoints.down('lg')]: {
      fontSize: '16px',
      lineHeight: '19px',
      margin: '10px 0 5px',
    },
  },
  [theme.breakpoints.down('lg')]: {
    paddingLeft: '7px',
  },
}));
