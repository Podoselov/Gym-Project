import { Box, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledBox = styled(Box)(() => ({
  position: 'relative',
  display: 'inline-block',
  zIndex: '999',
}));

export const StyledLink = styled(Link)(() => ({
  zIndex: '999',
}));
