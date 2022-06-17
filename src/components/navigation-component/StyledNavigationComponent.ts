import { Box, Button, IconButton, List, ListItem, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledWraper = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  margin: '0px',
  padding: '0px',
  color: 'rgba(255, 255, 255, 0.9)',
  backgroundColor: 'rgba(19, 19, 22, 1)',
}));

export const StyledContainer = styled(Box)(({ theme }) => ({
  maxWidth: '1800px',
  paddingLeft: '80px',
  paddingRight: '80px',
  margin: '0',
  [theme.breakpoints.down('lg')]: {
    padding: '20px 20px',
  },
}));

export const StyledNavBar = styled('nav')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const StyledList = styled(List)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}));

export const StyledListItem = styled(ListItem)(() => ({
  padding: '23px 0',
}));

export const StyledLink = styled(Link)(() => ({
  display: 'block',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '18px',
  textDecoration: 'none',
  padding: '0px 32px',
  color: 'rgba(255, 255, 255, 0.9)',
  '&:hover, &:focus': {
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '1px',
    color: 'rgba(0, 0, 0, 1)',
  },
}));

export const StyledLogin = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}));

export const StyledMenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  color: 'rgba(255, 255, 255, 0.9)',
  [theme.breakpoints.down('lg')]: {
    display: 'block',
  },
}));

export const StyledLogInButton = styled(Button)(() => ({
  color: '#FFFFFF',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '12px',
  lineHeight: '18px',
  textTransform: 'uppercase',
}));

export const StyledSignInButton = styled(Button)(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '12px',
  lineHeight: '18px',
  textAlign: 'center',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  color: '#FFFFFF',
  backgroundColor: 'rgba(74, 226, 144, 1)',
  padding: '12px 30px',
  border: '2px solid #4AE290',
  borderRadius: '1px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    border: '2px solid rgba(255, 255, 255, 0.9)',
    color: 'rgba(0, 0, 0, 1)',
  },
}));
