import { Box, styled } from '@mui/material';

export const StyledProgramWraper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  margin: '0 0 20px 0',
  padding: '0',
}));

export const StyledProgramContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#111',
  padding: '23px 0 23px 40px',
  display: 'flex',
  '& h2': {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '32px',
    lineHeight: '39px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    margin: '0 39px 0 0 ',
    [theme.breakpoints.down('lg')]: {
      fontSize: '16px',
      lineHeight: '19px',
      margin: '0 0 10px 0 ',
    },
  },
  '& p': {
    fontFamily: 'Inter',
    fontStyle: 'italic',
    fontWeight: '900',
    fontSize: '32px',
    lineHeight: '39px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    margin: '0',
    color: 'rgba(119, 233, 172, 1)',
    [theme.breakpoints.down('lg')]: {
      fontSize: '16px',
      lineHeight: '19px',
    },
  },
  [theme.breakpoints.down('lg')]: {
    backgroundColor: 'rgba(30, 30, 30, 1)',
    flexDirection: 'column',
    padding: '7px 0 7px 7px',
  },
}));
