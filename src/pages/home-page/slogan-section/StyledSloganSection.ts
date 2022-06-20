import { Box, Button, Container, styled } from '@mui/material';

export const StyledWraper = styled(Box)(() => ({
  width: '100%',
  margin: '0',
  padding: '0',
  backgroundColor: '#131316',
}));

export const StyledContainer = styled(Container)(({ theme }) => ({
  maxWidth: '1038px',
  [theme.breakpoints.down('lg')]: {
    paddingLeft: '20px',
    paddingRight: '20px',
  },
}));

export const StyledBox = styled(Box)(() => ({
  maxWidth: '515px',
  zIndex: '22',
}));

export const StyledContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  marginLeft: '10%',
  [theme.breakpoints.down('lg')]: {
    justifyContent: 'center',
  },
}));

export const StyledSpan = styled('span')(({ theme }) => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '800',
  fontSize: '60px',
  lineHeight: '62px',
  color: '#4AE290',
  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  display: 'block',
  [theme.breakpoints.down('lg')]: {
    fontSize: '34px',
    lineHeight: '150%',
  },
}));

export const StyledHeading = styled('h1')(({ theme }) => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '800',
  fontSize: '60px',
  lineHeight: '62px',
  color: '#FFFFFF',
  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  paddingTop: '172px',
  paddingBottom: '32px',
  margin: '0',
  zIndex: '3',
  [theme.breakpoints.down('lg')]: {
    fontSize: '34px',
    lineHeight: '150%',
    paddingBottom: '12px',
  },
}));

export const StyledText = styled('p')(({ theme }) => ({
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '24px',
  lineHeight: '34px',
  color: '#DEDEE3',
  marginBottom: '32px',
  [theme.breakpoints.down('lg')]: {
    fontSize: '16px',
    marginBottom: '12px',
  },
}));

export const StyledButton = styled(Button)(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '14px',
  lineHeight: '18px',
  color: '#131316',
  textTransform: 'uppercase',
  backgroundColor: '#FFFFFF',
  padding: '14px 40px',
  border: '2px solid #FFFFFF',
  borderRadius: '1px',
  marginBottom: '174px',
  '&:hover': {
    backgroundColor: 'rgba(74, 226, 144, 1)',
    color: 'rgba(255, 255, 255, 0.9)',
    border: '2px solid rgba(74, 226, 144, 1)',
  },
}));

export const StyledImg = styled('img')(() => ({
  maxWidth: '500px',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
  top: '0',
  left: '450px',
  zIndex: '-999',
}));
