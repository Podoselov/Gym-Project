import { Accordion, Box, styled, Typography } from '@mui/material';

export const StyledWraper = styled(Box)(({ theme }) => ({
  width: '100%',
  margin: '0',
  padding: '0',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.down('lg')]: {
    paddingTop: '50px',
  },
}));

export const StyledContainer = styled(Box)(() => ({
  maxWidth: '768px',
}));

export const StyledHeading = styled('h1')(({ theme }) => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '800',
  fontSize: '50px',
  lineHeight: '50px',
  color: '#131316',
  textAlign: 'center',
  marginBottom: '92px',
  [theme.breakpoints.down('lg')]: {
    fontSize: '24px',
    marginBottom: '30px',
    marginTop: '0px',
  },
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '18px',
  lineHeight: '28px',
  color: '#131316',
  padding: '20px 0',
  [theme.breakpoints.down('lg')]: {
    fontSize: '16px',
    padding: '5px 0',
  },
}));

export const StyledDetailsTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '26px',
  color: '#595962',
  paddingRight: '90px',
  [theme.breakpoints.down('lg')]: {
    fontSize: '14px',
    paddingRight: '0px',
  },
}));

export const StyledAccordion = styled(Accordion)(() => ({
  border: '1px solid rgba(19, 19, 22, 0.1)',
  borderRadius: '2px',
  marginBottom: '16px',
}));
