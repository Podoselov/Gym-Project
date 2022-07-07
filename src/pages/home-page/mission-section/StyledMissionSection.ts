import { Box, Button, styled } from '@mui/material';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

export const StyledWraper = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  margin: '0px',
  padding: '0px',
  backgroundColor: 'rgba(255, 255, 255, 1)',
}));

export const StyledSpan = styled('span')(() => ({
  color: 'rgba(74, 226, 144, 1)',
}));

export const StyledHeading = styled('h1')(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '800',
  fontSize: '50px',
  lineHeight: '50px',
  color: '#131316',
  padding: '0 0 52px',
  margin: '0',
  textAlign: 'center',
}));

export const StyledText = styled('p')(() => ({
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '20px',
  lineHeight: '32px',
  color: '#595962',
  marginBottom: '32px',
  padding: '0 180px',
}));

export const StyledButton = styled(Button)(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '14px',
  lineHeight: '18px',
  color: '#131316',
  textTransform: 'uppercase',
  backgroundColor: '#FFFFFF',
  padding: '17px 0 17px 180px',
}));

export const StyledButtonIcon = styled(KeyboardArrowRightOutlinedIcon)(() => ({
  color: '#FCFCFF',
  backgroundColor: '#131316',
  borderRadius: '50%',
  marginLeft: '16px',
}));
