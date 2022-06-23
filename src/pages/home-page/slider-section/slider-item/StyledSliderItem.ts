import { Button, ListItem, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledListItem = styled(ListItem)(() => ({}));

export const StyledLink = styled(Link)(() => ({
  display: 'block',
  minHeight: '300px',
  color: '#111',
  cursor: 'pointer',
  textDecoration: 'none',
  fontWeight: '500',
  height: '350px',
  position: 'relative',
  transition: 'all ease-out 0.3s',
  '&:hover': {
    transform: 'translateY(-10px)',
  },
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

export const StyledButton = styled(Button)(() => ({
  backgroundColor: '#FFFFFF',
  padding: '4px 14px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '18px',
  color: '#131316',
  position: 'absolute',
  bottom: '20px',
  left: '20px',
  '&:hover': {
    backgroundColor: '#CACACA',
  },
}));
