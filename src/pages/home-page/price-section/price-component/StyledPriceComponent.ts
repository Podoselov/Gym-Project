import { styled, Box, List, ListItem, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledBox = styled(Box)(() => ({
  padding: '0',
  margin: '0',
  backgroundColor: 'rgba(19, 19, 22, 0.05)',
  display: 'inline-block',
}));

export const StyledMainBox = styled(Box)(() => ({
  padding: '0',
  margin: '0',
  backgroundColor: '#131316',
  display: 'inline-block',
}));

export const StyledName = styled(Box)(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '18px',
  textAlign: 'center',
  color: '#FFFFFF',
  padding: '4px 14px',
  margin: '80px 170px 32px',
  backgroundColor: '#131316',
  borderRadius: '1px',
}));

export const StyledMainName = styled(Box)(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '18px',
  textAlign: 'center',
  color: '#131316',
  padding: '4px 14px',
  margin: '80px 170px 32px',
  backgroundColor: '#FFFFFF',
  borderRadius: '1px',
}));

export const StyledPriceContainer = styled(Box)(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '800',
  fontSize: '50px',
  lineHeight: '50px',
  textAlign: 'center',
  color: '#131316',
  letterSpacing: '0.1px',
}));

export const StyledMainPriceContainer = styled(Box)(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '800',
  fontSize: '50px',
  lineHeight: '50px',
  textAlign: 'center',
  color: '#FFFFFF',
  letterSpacing: '0.1px',
}));

export const StyledPriceText = styled('p')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '24px',
  textAlign: 'center',
  color: '#595962',
  marginBottom: '32px',
}));

export const StyledMainPriceText = styled('p')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '24px',
  textAlign: 'center',
  color: '#DEDEE3',
  marginBottom: '32px',
}));

export const StyledList = styled(List)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0px 92px 16px',
}));

export const StyledListItem = styled(ListItem)(() => ({
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '26px',
  color: '#131316',
  marginBottom: '16px',
}));

export const StyledMainItem = styled(ListItem)(() => ({
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '26px',
  color: '#DEDEE3',
  marginBottom: '16px',
}));

export const StyledButton = styled(Link)(() => ({
  margin: '0px 0px 80px 0px',
  padding: '14px 40px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '14px',
  lineHeight: '18px',
  color: '#131316',
  border: '1px solid #131316',
  borderRadius: '1px',
  textTransform: 'uppercase',
  textDecoration: 'none',
}));

export const StyledButtonWraper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StyledMainButton = styled(Link)(() => ({
  margin: '0px 0px 80px 0px',
  padding: '14px 40px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '14px',
  lineHeight: '18px',
  color: '#131316',
  border: '2px solid #FFFFFF',
  borderRadius: '1px',
  textTransform: 'uppercase',
  backgroundColor: '#FFFFFF',
  textDecoration: 'none',
  '&:hover': {
    backgroundColor: '#FFFFFF',
  },
}));
