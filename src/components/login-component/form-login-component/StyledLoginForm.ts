import { Box, Button, FormControlLabel, Link, styled } from '@mui/material';
import { Field, Form } from 'formik';

export const StyledForm = styled(Form)(() => ({
  maxWidth: '500px',
}));

export const StyledName = styled('p')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '16px',
  lineHeight: '18px',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  margin: '40px 0 10px 0',
}));

export const StyledMailField = styled(Field)(() => ({
  border: '1px solid #000000',
  color: 'rgba(0, 0, 0, 1)',
  height: '50px',
  padding: '0 16px',
  width: '100%',
  marginBottom: '20px',
  fontSize: '16px',
}));

export const StyledPassField = styled(Field)(() => ({
  border: '1px solid #000000',
  color: 'rgba(0, 0, 0, 1)',
  height: '50px',
  padding: '0 16px',
  width: '100%',
  fontSize: '16px',
}));

export const StyledFormControlLabel = styled(FormControlLabel)(() => ({
  '& span': {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '16px',
  },
}));

export const StyledLink = styled(Link)(() => ({
  color: 'rgba(74, 226, 144, 1)',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '14px',
  lineHeight: '16px',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  textDecoration: 'none',
}));

export const StyledBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const StyledText = styled('p')(() => ({
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
}));

export const StyledButton = styled(Button)(() => ({
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
}));

export const StyledButtonFacebook = styled(Button)(() => ({
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
}));

export const StyledButtonGmail = styled(Button)(() => ({
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
}));
