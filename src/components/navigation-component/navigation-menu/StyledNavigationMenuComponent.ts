import { Box, Button, Container, styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

export const StyledWraper = styled(Box)(() => ({
  width: '100%',
  minHeight: '100%',
  margin: '0',
  padding: '0',
  backgroundColor: 'rgba(17, 17, 17, 1)',
  position: 'absolute',
  top: '0',
  left: '0',
  zIndex: '999',
}));

export const StyledContainer = styled(Box)(() => ({
  padding: '9px 20px',
}));

export const StyledButton = styled(Button)(() => ({
  width: '24px',
  height: '24px',
  margin: '0',
  padding: '0',
  minWidth: 'auto',
}));

export const StyledCloseIcon = styled(CloseIcon)(() => ({
  color: '#fff',
  width: '23px',
  height: '23px',
}));

export const StyledHeaderWraper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '15px',
  marginBottom: '84px',
}));

export const StyledContainerLink = styled(Container)(() => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
}));

export const StyledMenuLink = styled(Link)(() => ({
  width: '100%',
  padding: '10px 0',
  textAlign: 'center',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '800',
  fontSize: '24px',
  lineHeight: '150%',
  textTransform: 'uppercase',
  textDecoration: 'none',
  color: '#fff',
}));

export const StyledButtonContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
}));

export const StyledButtonLink = styled(Link)(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '150%',
  padding: '13px 28px',
  color: '#000000',
  backgroundColor: '#FFFFFF',
  display: 'inline-block',
  textTransform: 'uppercase',
  textDecoration: 'none',
  textAlign: 'center',
  margin: '65px 48px 16px',
}));

export const StyledButtonLogIn = styled(Link)(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '150%',
  padding: '13px 28px',
  color: '#FFFFFF',
  display: 'inline-block',
  textTransform: 'uppercase',
  textDecoration: 'none',
  textAlign: 'center',
  margin: '0px 48px 25px',
}));
