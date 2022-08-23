import React, { useCallback } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { ErrorMessage, Formik } from 'formik';
import Checkbox from '@mui/material/Checkbox';
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
  StyledMailField,
  StyledName,
  StyledPassField,
  StyledSocialButtonWraper,
  StyledText,
} from '../form-login-component/StyledLoginForm';
import { useAppDispatch } from '../../../hooks/redux';
import {
  addTrainingId,
  loginUser,
} from '../../../store/reducers/trainingReducers';
import { routes } from '../../../utils/routes';

interface SignInFormValues {
  nameMail: string;
  email: string;
  password: string;
  remember: boolean;
}

const SignInFormComponent: React.FC<{}> = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const addUserToState = useCallback((userValue: SignInFormValues) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, userValue.email, userValue.password)
      .then(({ user }) => {
        dispatch(
          loginUser({
            nameMail: userValue.nameMail,
            email: user.email,
            id: user.uid,
            remember: userValue.remember,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const SignupSchema = Yup.object().shape({
    nameMail: Yup.string().required(''),
    email: Yup.string().required('Please enter a valid email address.'),
    password: Yup.string()
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .required('Please enter a password.'),
  });

  const initialValues: SignInFormValues = {
    nameMail: '',
    email: '',
    password: '',
    remember: false,
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          addUserToState(values);
          navigate(routes.HOME_ROUTE);
          actions.resetForm();
        }}
      >
        {({ values, handleChange, errors }) => (
          <StyledForm>
            <StyledName>YOUR name</StyledName>
            <StyledMailField id="firstName" name="nameMail" />
            <StyledName sx={{ margin: '0 0 10px 0' }}>
              email or phone number
            </StyledName>
            <StyledMailField id="email" name="email" />
            <StyledName sx={{ margin: '0 0 10px 0' }}>PASSWORD</StyledName>
            <StyledPassField type="password" id="password" name="password" />
            <StyledBox
              sx={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <StyledFormControlLabel
                control={
                  <Checkbox
                    name="remember"
                    onChange={handleChange}
                    checked={values.remember}
                  />
                }
                label="REMEMBER ME"
              />
            </StyledBox>
            <StyledFlexBox>
              <StyledButton type="submit">get started</StyledButton>
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

export default SignInFormComponent;
