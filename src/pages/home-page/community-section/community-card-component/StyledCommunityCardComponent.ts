import { styled, Box } from '@mui/material';

export const StyledCardWraper = styled(Box)(() => ({
  height: '480px',
  margin: '0',
  padding: '0',
  position: 'relative',
}));

export const StyledTextWraper = styled(Box)(() => ({
  position: 'absolute',
  zIndex: '999',
  bottom: '0',
  left: '0',
}));

export const StyledText = styled('p')(() => ({
  fontFamily: 'Open Sans',
  fontStyle: 'italic',
  fontWeight: '400',
  fontSize: '18px',
  lineHeight: '26px',
  color: '#FFFFFF',
  padding: '0 20px',
}));

export const StyledName = styled('p')(() => ({
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '20px',
  lineHeight: '24px',
  color: '#FFFFFF',
  textAlign: 'center',
  display: 'inline-block',
}));

export const StyledSpan = styled('span')(() => ({
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '30px',
  lineHeight: '24px',
  color: '#4AE290',
  paddingRight: '3px',
}));

export const StyledNameBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
