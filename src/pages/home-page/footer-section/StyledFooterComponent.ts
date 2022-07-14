import { Box, styled, Typography } from '@mui/material';

export const StyledWraper = styled(Box)(() => ({
  width: '100%',
  margin: '0',
  padding: '0',
  backgroundColor: '#131316',
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '464px',
}));

export const StyledContainer = styled(Box)(() => ({
  maxWidth: '492px',
  marginRight: '240px',
  position: 'relative',
  zIndex: '999',
  marginBottom: '174px',
}));

export const StyledImg = styled('img')(() => ({
  maxWidth: '500px',
  height: '153%',
  top: '-50px',
  right: '450px',
  objectFit: 'cover',
  position: 'absolute',
  zIndex: '-999',
}));

export const StyledHeading = styled('h1')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '800',
  fontSize: '60px',
  lineHeight: '62px',
  color: '#FFFFFF',
  padding: '74px 0 24px',
}));

export const StyledTypography = styled(Typography)(() => ({
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '20px',
  lineHeight: '32px',
  color: '#FFFFFF',
  padding: '0 0 32px 0',
}));
