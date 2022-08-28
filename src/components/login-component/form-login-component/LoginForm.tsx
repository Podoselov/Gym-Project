import * as React from 'react';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import * as Yup from 'yup';
import { ErrorMessage, Formik } from 'formik';
import Checkbox from '@mui/material/Checkbox';
import { Alert, IconButton } from '@mui/material';
import { useAppDispatch } from '../../../hooks/redux';
import { loginUser } from '../../../store/reducers/trainingReducers';
import { routes } from '../../../utils/routes';
import {
  StyledBox,
  StyledButton,
  StyledButtonFacebook,
  StyledButtonGmail,
  StyledErrorMessage,
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
  remember: boolean;
}

export const LoginForm: React.FC<{}> = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const addLoginUsertoState = useCallback((userValue: MyFormValues) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, userValue.nameMail, userValue.password)
      .then(({ user }) => {
        dispatch(
          loginUser({
            nameMail: userValue.nameMail,
            email: user.email,
            id: user.uid,
            remember: userValue.remember,
            training: '',
          })
        );
        setErrorMessage('');
        navigate(routes.HOME_ROUTE);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

  const SignupSchema = Yup.object().shape({
    nameMail: Yup.string()
      .email('Please enter a valid email address.')
      .required('Please enter a valid email address.'),
    password: Yup.string()
      .required('Please enter a password.')
      .min(8, 'Password is too short - should be 8 chars minimum.'),
  });

  const initialValues: MyFormValues = {
    nameMail: '',
    password: '',
    remember: false,
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          addLoginUsertoState(values);
          actions.resetForm();
        }}
        validationSchema={SignupSchema}
      >
        {({ values, handleChange }) => (
          <StyledForm>
            {errorMessage.length > 0 ? (
              <Alert severity="error">{errorMessage.slice(17, 36)}</Alert>
            ) : null}
            <StyledName>User name / email address</StyledName>
            <StyledMailField id="firstName" name="nameMail" />
            <ErrorMessage name="nameMail">
              {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
            </ErrorMessage>
            <StyledName sx={{ margin: '0 0 10px 0' }}>PASSWORD</StyledName>
            <StyledPassField id="password" name="password" />
            <ErrorMessage name="password">
              {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
            </ErrorMessage>
            <StyledBox>
              <StyledFormControlLabel
                control={
                  <Checkbox
                    name="remember"
                    checked={values.remember}
                    onChange={handleChange}
                  />
                }
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
