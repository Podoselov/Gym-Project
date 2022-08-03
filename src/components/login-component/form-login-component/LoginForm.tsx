import * as React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Checkbox from '@mui/material/Checkbox';
import { IconButton } from '@mui/material';
import {
  StyledBox,
  StyledButton,
  StyledButtonFacebook,
  StyledButtonGmail,
  StyledFacebookIcon,
  StyledFlexBox,
  StyledForm,
  StyledFormControlLabel,
  StyledGoogleIcon,
  StyledLink,
  StyledMailField,
  StyledName,
  StyledPassField,
  StyledSocialButtonWraper,
  StyledText,
} from './StyledLoginForm';

interface MyFormValues {
  nameMail: string;
  password: string;
}

export const LoginForm: React.FC<{}> = () => {
  const SignupSchema = Yup.object().shape({
    nameMail: Yup.string().required('Please enter a valid email address.'),
    password: Yup.string()
      .required('Please enter a password.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  });

  const initialValues: MyFormValues = { nameMail: '', password: '' };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}
      >
        {({ values }) => (
          <StyledForm>
            <StyledName>User name / email address</StyledName>
            <StyledMailField id="firstName" name="nameMail" />
            <StyledName sx={{ margin: '0 0 10px 0' }}>PASSWORD</StyledName>
            <StyledPassField id="password" name="password" />
            <StyledBox>
              <StyledFormControlLabel
                control={<Checkbox name="remember" />}
                label="REMEMBER ME"
              />
              <StyledLink href="!#">FORGOT PASSWORD?</StyledLink>
            </StyledBox>
            <StyledFlexBox>
              <StyledButton type="submit">sing up</StyledButton>
              <StyledText>or</StyledText>
              <StyledButtonFacebook>login with facebook</StyledButtonFacebook>
              <StyledButtonGmail>login with gmail</StyledButtonGmail>
            </StyledFlexBox>
            <StyledSocialButtonWraper>
              <IconButton size="large">
                <StyledFacebookIcon color="primary" />
              </IconButton>
              <IconButton size="large">
                <StyledGoogleIcon color="error" />
              </IconButton>
            </StyledSocialButtonWraper>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
};
