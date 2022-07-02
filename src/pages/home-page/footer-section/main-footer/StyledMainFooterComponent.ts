import { Box, List, styled } from '@mui/material';

export const StyledWraper = styled(Box)(() => ({
  width: '100%',
  margin: '0',
  padding: '0',
  backgroundColor: '#000000',
}));

export const StyledContainer = styled(Box)(() => ({
  padding: '33px 80px',
}));

export const StyledIconWraper = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'flex-start',
}));

export const StyledBox = styled(Box)(() => ({
  display: 'flex',
}));

export const StyledList = styled(List)(() => ({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  padding: '0',
  '& a': {
    marginBottom: '10px',
  },
}));
