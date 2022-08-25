import { Box, Button, styled } from '@mui/material';

export const StyledButtonWraper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  margin: '0',
  padding: '0',
  backgroundColor: '#fff',
  [theme.breakpoints.down('lg')]: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
}));

export const StyledButtonExit = styled(Button)(({ theme }) => ({
  display: 'none',
  color: 'rgba(0, 0, 0, 1)',
  border: '0px',
  padding: '16px 58px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '16px',
  lineHeight: '19px',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  margin: '0 0 19px 0',
  [theme.breakpoints.down('lg')]: {
    display: 'block',
  },
}));

export const StyledButtonBuyMore = styled(Button)(({ theme }) => ({
  color: 'rgba(119, 233, 172, 1)',
  backgroundColor: 'rgba(0, 0, 0, 1)',
  border: '0px',
  cursor: 'pointer',
  padding: '16px 58px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '24px',
  lineHeight: '29px',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  margin: '0 0 19px 0',
  [theme.breakpoints.down('lg')]: {
    fontSize: '18px',
    lineHeight: '22px',
  },
}));
