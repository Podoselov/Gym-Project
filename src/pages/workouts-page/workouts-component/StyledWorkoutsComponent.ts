import { Box, styled } from '@mui/material';

export const StyledWorkoutsWraper = styled(Box)(() => ({
  display: 'flex',
  marginBottom: '100px',
}));

export const StyledImgWraper = styled(Box)(() => ({
  minHeight: '420px',
  minWidth: '450px',
  position: 'relative',
  marginRight: '58px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
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
  },
}));

export const StyledText = styled('p')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '20px',
  lineHeight: '150%',
  color: '#000000',
  marginBottom: '10px',
  display: 'inline-block',
}));

export const StyledBox = styled(Box)(() => ({
  display: 'inline-block',
}));
