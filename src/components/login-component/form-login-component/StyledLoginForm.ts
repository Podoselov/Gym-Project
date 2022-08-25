import { Box, Button, FormControlLabel, Link, styled } from '@mui/material';
import { ErrorMessage, Field, Form } from 'formik';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

export const StyledForm = styled(Form)(() => ({
  maxWidth: '500px',
}));

export const StyledName = styled('p')(({ theme }) => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '16px',
  lineHeight: '18px',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  margin: '20px 0 6px 0',
  [theme.breakpoints.down('lg')]: {
    color: '#fff',
  },
}));

export const StyledMailField = styled(Field)(({ theme }) => ({
  border: '1px solid #000000',
  color: 'rgba(0, 0, 0, 1)',
  height: '50px',
  padding: '0 16px',
  width: '100%',
  marginBottom: '20px',
  fontSize: '16px',
  [theme.breakpoints.down('lg')]: {
    color: '#fff',
    border: '1px solid #fff',
    padding: '0 20px',
    backgroundColor: '#000',
  },
}));

export const StyledPassField = styled(Field)(({ theme }) => ({
  border: '1px solid #000000',
  color: 'rgba(0, 0, 0, 1)',
  height: '50px',
  padding: '0 16px',
  width: '100%',
  fontSize: '16px',
  [theme.breakpoints.down('lg')]: {
    color: '#fff',
    border: '1px solid #fff',
    padding: '0 20px',
    backgroundColor: '#000',
  },
}));

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  '& span': {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '16px',
    [theme.breakpoints.down('lg')]: {
      color: '#fff',
    },
  },
  [theme.breakpoints.down('lg')]: {
    color: '#fff',
  },
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  color: 'rgba(74, 226, 144, 1)',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '14px',
  lineHeight: '16px',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  textDecoration: 'none',
  [theme.breakpoints.down('lg')]: {
    alignSelf: 'center',
    marginBottom: '34px',
  },
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}));

export const StyledText = styled('p')(({ theme }) => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '16px',
  lineHeight: '18px',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  color: '#000000',
  textAlign: 'center',
  margin: '0',
  [theme.breakpoints.down('lg')]: {
    color: '#fff',
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '16px',
  lineHeight: '18px',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  color: '#000000',
  width: '100%',
  backgroundColor: 'rgba(119, 233, 172, 1)',
  padding: '16px 0',
  margin: '20px 0 20px',
  '&:hover': {
    backgroundColor: 'rgba(119, 233, 172, 1)',
  },
  [theme.breakpoints.down('lg')]: {
    width: 'fit-content',
    padding: '11px 40px',
  },
}));

export const StyledButtonFacebook = styled(Button)(({ theme }) => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '16px',
  lineHeight: '18px',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  width: '100%',
  backgroundColor: 'rgba(75, 142, 203, 1)',
  padding: '16px 0',
  margin: '20px 0 0 0',
  color: '#FFFFFF',
  '&:hover': {
    backgroundColor: 'rgba(75, 142, 203, 1)',
  },
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}));

export const StyledFlexBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StyledSocialButtonWraper = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('lg')]: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export const StyledFacebookIcon = styled(FacebookIcon)(() => ({
  width: '54px',
  height: '54px',
}));

export const StyledGoogleIcon = styled(GoogleIcon)(() => ({
  width: '54px',
  height: '54px',
}));

export const StyledButtonGmail = styled(Button)(({ theme }) => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '16px',
  lineHeight: '18px',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  color: '#FFFFFF',
  width: '100%',
  backgroundColor: 'rgba(190, 49, 49, 1)',
  padding: '16px 0',
  margin: '20px 0 20px',
  '&:hover': {
    backgroundColor: 'rgba(190, 49, 49, 1)',
  },
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}));

export const StyledErrorMessage = styled(Box)(({ theme }) => ({
  color: 'rgba(190, 49, 49, 1)',
  [theme.breakpoints.down('lg')]: {},
}));
