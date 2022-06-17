import { Box, styled } from '@mui/material';

export const StyledWraper = styled(Box)(() => ({
  maxWidth: '1240px',
  backgroundColor: '#FFFFFF',
  margin: 'auto',
}));

export const StyledImgBox = styled(Box)(() => ({
  position: 'relative',
  flex: '0 0 53.333%',
  minHeight: '650px',
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

export const StyledBox = styled(Box)(() => ({
  marginTop: '72px',
  padding: '40px 0 0 80px',
  display: 'flex',
  justifyContent: 'flex-end',
  position: 'relative',
}));

export const StyledFormBox = styled(Box)(() => ({
  zIndex: '1',
  position: 'absolute',
  left: '85px',
}));

export const StyledHeading = styled('header')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '36px',
  lineHeight: '44px',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  color: '#000000',
}));
