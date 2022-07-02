import { Accordion, Box, Container, styled, Typography } from '@mui/material';

export const StyledWraper = styled(Box)(() => ({
  width: '100%',
  margin: '0',
  padding: '0',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  display: 'flex',
  justifyContent: 'center',
}));

export const StyledContainer = styled(Box)(() => ({
  maxWidth: '768px',
  marginBottom: '464px',
}));

export const StyledHeading = styled('h1')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '800',
  fontSize: '50px',
  lineHeight: '50px',
  color: '#131316',
  textAlign: 'center',
  marginBottom: '92px',
}));

export const StyledTypography = styled(Typography)(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '18px',
  lineHeight: '28px',
  color: '#131316',
  padding: '20px 0',
}));

export const StyledDetailsTypography = styled(Typography)(() => ({
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '26px',
  color: '#595962',
  paddingRight: '90px',
}));

export const StyledAccordion = styled(Accordion)(() => ({
  border: '1px solid rgba(19, 19, 22, 0.1)',
  borderRadius: '2px',
  marginBottom: '16px',
}));
