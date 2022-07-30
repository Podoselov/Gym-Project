import { Box, List, ListItem, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledWraper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  margin: '0px',
  padding: '0px',
  color: 'rgba(255, 255, 255, 0.9)',
  backgroundColor: 'rgba(19, 19, 22, 1)',
  [theme.breakpoints.down('lg')]: {
    backgroundColor: '#111111',
  },
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

export const StyledList = styled(List)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: '23px 0',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'absolute',
    top: '0',
    right: '0',
    zIndex: '999',
    backgroundColor: '#111111',
    minWidth: '320px',
    padding: '84px 0 62px',
    display: 'none',
  },
}));

export const StyledLink = styled(Link)(({ theme }) => ({
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
  [theme.breakpoints.down('lg')]: {
    fontWeight: '800',
    fontSize: '24px',
    lineHeight: '150%',
    marginBottom: '10px',
  },
}));

export const StyledLogin = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}));

export const StyledMenuButton = styled(Link)(({ theme }) => ({
  display: 'none',
  color: 'rgba(255, 255, 255, 0.9)',
  zIndex: '999',
  [theme.breakpoints.down('lg')]: {
    display: 'block',
  },
}));

export const StyledLogInButton = styled(Link)(() => ({
  color: '#FFFFFF',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '12px',
  lineHeight: '18px',
  textTransform: 'uppercase',
  textDecoration: 'none',
  textAlign: 'center',
  padding: '12px 30px',
}));

export const StyledSignInButton = styled(Link)(() => ({
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
  textDecoration: 'none',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    border: '2px solid rgba(255, 255, 255, 0.9)',
    color: 'rgba(0, 0, 0, 1)',
  },
}));
