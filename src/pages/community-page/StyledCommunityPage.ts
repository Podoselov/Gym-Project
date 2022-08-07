import { Box, Button, List, styled } from '@mui/material';

export const StyledHeaderWraper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '90px',
  [theme.breakpoints.down('lg')]: {
    paddingTop: '50px',
  },
}));

export const StyledWraper = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  margin: '0',
  padding: '0',
  backgroundColor: 'rgba(255, 255, 255, 1)',
}));

export const StyledCommunityWraper = styled(Box)(() => ({
  marginBottom: '50px',
}));

export const StyledButtonWraper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '50px',
}));

export const StyledList = styled(List)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
  },
}));

export const StyledButton = styled(Button)(() => ({
  padding: '14px 40px',
  backgroundColor: 'rgba(24, 24, 24, 1)',
  borderRadius: '1px',
  color: 'rgba(255, 255, 255, 1)',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '14px',
  lineHeight: '18px',
  textTransform: 'uppercase',
  '&:hover': {
    backgroundColor: 'rgba(24, 24, 24, 1)',
  },
}));
