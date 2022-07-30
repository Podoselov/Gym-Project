import { Box, styled, Typography } from '@mui/material';

export const StyledWraper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  margin: '0',
  padding: '0',
  backgroundColor: '#131316',
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '464px',
  [theme.breakpoints.down('lg')]: {
    justifyContent: 'flex-start',
    marginTop: '60px',
  },
}));

export const StyledContainer = styled(Box)(({ theme }) => ({
  maxWidth: '492px',
  marginRight: '240px',
  position: 'relative',
  zIndex: '999',
  marginBottom: '174px',
  [theme.breakpoints.down('lg')]: {
    margin: '0',
    padding: '0 20px',
  },
}));

export const StyledImg = styled('img')(({ theme }) => ({
  maxWidth: '500px',
  height: '153%',
  top: '-50px',
  right: '450px',
  objectFit: 'cover',
  position: 'absolute',
  zIndex: '-999',
  [theme.breakpoints.down('lg')]: {
    width: '100%',
    height: '100%',
    top: '0',
    right: '0',
  },
}));

export const StyledHeading = styled('h1')(({ theme }) => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '800',
  fontSize: '60px',
  lineHeight: '62px',
  color: '#FFFFFF',
  padding: '74px 0 24px',
  [theme.breakpoints.down('lg')]: {
    fontSize: '36px',
    lineHeight: '150%',
    padding: '45px 0 0 0',
  },
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '20px',
  lineHeight: '32px',
  color: '#FFFFFF',
  padding: '0 0 32px 0',
  [theme.breakpoints.down('lg')]: {
    padding: '0 0 26px 0',
    fontSize: '16px',
    lineHeight: '150%',
  },
}));

export const StyledLogoWraper = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('lg')]: {
    display: 'block',
    margin: '158px 0 15px',
  },
}));
