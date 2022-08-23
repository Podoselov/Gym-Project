import { Box, styled } from '@mui/material';

export const StyledProgramTimeWraper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  margin: '0',
  padding: '0',
  backgroundColor: '#FFFFFF',
  '& h2': {
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '32px',
    lineHeight: '39px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    margin: '0 0 0 40px',
    [theme.breakpoints.down('lg')]: {},
  },
}));

export const StyledProgramContainer = styled(Box)(() => ({
  margin: '0',
  padding: '0',
  backgroundColor: '#111',
}));
