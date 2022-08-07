import { Box, styled } from '@mui/material';

export const StyledWorkoutsWraper = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginBottom: '100px',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    marginBottom: '30px',
  },
}));

export const StyledImgWraper = styled(Box)(({ theme }) => ({
  minHeight: '420px',
  minWidth: '450px',
  position: 'relative',
  marginRight: '58px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  [theme.breakpoints.down('lg')]: {
    minHeight: '266px',
    minWidth: '275px',
    marginRight: '0',
  },
  '& img': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    objectFit: 'cover',
  },
  '& p': {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '32px',
    lineHeight: '18px',
    textAlign: 'center',
    letterSpacing: '2.5px',
    display: 'inline-block',
    zIndex: '999',
    backgroundColor: '#131316',
    width: '100%',
    padding: '29px 0',
    margin: '0',
    [theme.breakpoints.down('lg')]: {
      fontSize: '20px',
      lineHeight: '150%',
      padding: '18px 0',
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      color: '#000',
    },
  },
}));

export const StyledText = styled('p')(({ theme }) => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '20px',
  lineHeight: '150%',
  color: '#000000',
  marginBottom: '10px',
  display: 'inline-block',
  [theme.breakpoints.down('lg')]: {
    fontSize: '14px',
  },
}));

export const StyledBox = styled(Box)(() => ({
  display: 'inline-block',
}));
