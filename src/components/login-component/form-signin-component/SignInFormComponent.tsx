import React from 'react';
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
} from '../form-login-component/StyledLoginForm';

interface SignInFormValues {
  nameMail: string;
  email: string;
  password: string;
}

const SignInFormComponent: React.FC<{}> = () => {
  const SignupSchema = Yup.object().shape({
    nameMail: Yup.string().required('Please enter a valid name.'),
    email: Yup.string().required('Please enter a valid email address.'),
    password: Yup.string()
      .required('Please enter a password.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  });

  const initialValues: SignInFormValues = {
    nameMail: '',
    email: '',
    password: '',
  };

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
            <StyledName>YOUR name</StyledName>
            <StyledMailField id="firstName" name="nameMail" />
            <StyledName sx={{ margin: '0 0 10px 0' }}>
              email or phone number
            </StyledName>
            <StyledMailField id="email" name="email" />
            <StyledName sx={{ margin: '0 0 10px 0' }}>PASSWORD</StyledName>
            <StyledPassField id="password" name="password" />
            <StyledBox
              sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <StyledFormControlLabel
                control={<Checkbox name="remember" />}
                label="REMEMBER ME"
              />
            </StyledBox>
            <StyledButton type="submit">get started</StyledButton>
            <StyledText>or</StyledText>
            <StyledButtonFacebook>login with facebook</StyledButtonFacebook>
            <StyledButtonGmail>login with gmail</StyledButtonGmail>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
};

export default SignInFormComponent;
