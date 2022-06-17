import * as React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Checkbox from '@mui/material/Checkbox';
import {
  StyledForm,
  StyledName,
  StyledMailField,
  StyledPassField,
  StyledFormControlLabel,
  StyledLink,
  StyledText,
  StyledButton,
  StyledBox,
  StyledButtonFacebook,
  StyledButtonGmail,
} from './StyledLoginForm';

interface MyFormValues {
  nameMail: string;
  password: string;
}

export const LoginForm: React.FC<{}> = () => {
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email().required('Please enter a valid email address.'),
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
          console.log({ values, actions });
          actions.resetForm();
        }}
      >
        <StyledForm>
          <StyledName>User name / email address</StyledName>
          <StyledMailField id="firstName" name="firstName" />
          <StyledName sx={{ margin: '0 0 10px 0' }}>PASSWORD</StyledName>
          <StyledPassField id="password" name="password" />
          <StyledBox sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <StyledFormControlLabel
              control={<Checkbox name="remember" />}
              label="REMEMBER ME"
            />
            <StyledLink href="!#">FORGOT PASSWORD?</StyledLink>
          </StyledBox>
          <StyledButton>sing up</StyledButton>
          <StyledText>or</StyledText>
          <StyledButtonFacebook>login with facebook</StyledButtonFacebook>
          <StyledButtonGmail>login with gmail</StyledButtonGmail>
        </StyledForm>
      </Formik>
    </div>
  );
};
