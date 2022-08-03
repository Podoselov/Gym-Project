import { Box, styled } from '@mui/material';

export const StyledWraper = styled(Box)(({ theme }) => ({
  maxWidth: '1240px',
  backgroundColor: '#FFFFFF',
  margin: 'auto',
  [theme.breakpoints.down('lg')]: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    zIndex: '999',
    padding: '9px 20px',
    margin: '0',
  },
}));

export const StyledHeaderWraperBox = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('lg')]: {
    display: 'block',
  },
}));

export const StyledImgBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  flex: '0 0 53.333%',
  minHeight: '680px',
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}));

export const StyledImg = styled('img')(() => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  left: '0',
  top: '0',
  opacity: '0.75',
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  marginTop: '72px',
  padding: '40px 0 0 80px',
  display: 'flex',
  justifyContent: 'flex-end',
  position: 'relative',
  [theme.breakpoints.down('lg')]: {
    marginTop: '0',
    padding: '0',
  },
}));

export const StyledFormBox = styled(Box)(({ theme }) => ({
  zIndex: '1',
  position: 'absolute',
  left: '85px',
  width: '100%',
  [theme.breakpoints.down('lg')]: {
    left: '0',
    top: '-80px',
  },
}));

export const StyledHeading = styled('header')(({ theme }) => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '36px',
  lineHeight: '44px',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  color: '#000000',
  [theme.breakpoints.down('lg')]: {
    fontWeight: '800',
    fontSize: '20px',
    lineHeight: '150%',
    color: '#4AE290',
  },
}));
