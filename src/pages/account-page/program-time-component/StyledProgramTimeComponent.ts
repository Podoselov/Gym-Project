import { Box, styled } from '@mui/material';

export const StyledProgramTimeWraper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  margin: '0px 0px 30px 0px',
  padding: '0',
  backgroundColor: '#FFFFFF',
  '& h2': {
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '32px',
    lineHeight: '39px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    margin: '0 0 10px 40px',
    [theme.breakpoints.down('lg')]: {
      display: 'none',
    },
  },
}));

export const StyledTimeContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#111',
  padding: '23px 0 23px 40px',
  display: 'flex',
  '& p': {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '32px',
    lineHeight: '39px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    margin: '0 93px 0 0',
    color: 'rgba(255, 255, 255, 1)',
    [theme.breakpoints.down('lg')]: {
      fontSize: '16px',
      lineHeight: '19px',
      margin: '0px 0px 10px 0px',
    },
  },
  [theme.breakpoints.down('lg')]: {
    backgroundColor: 'rgba(30, 30, 30, 1)',
    flexDirection: 'column',
    padding: '7px 0 7px 7px',
  },
}));
