import React from 'react';
import { jsx } from '@emotion/react';
import {
  StyledWraper,
  StyledBox,
  StyledHeading,
  StyledFormBox,
  StyledImg,
  StyledImgBox,
} from './StyledLoginModal';
import loginModalImg from './form-login-component/login-modal-img/loginModalImg.png';

interface IProps {
  firstHeading: string;
  secondHeading: string;
  formComponent: jsx.JSX.Element | jsx.JSX.Element[];
}

const LoginModalComponent: React.FC<IProps> = ({
  firstHeading,
  secondHeading,
  formComponent,
}) => {
  return (
    <StyledWraper>
      <StyledBox>
        <StyledFormBox>
          <StyledHeading sx={{ paddingTop: '10px' }}>
            {firstHeading}
            <StyledHeading>{secondHeading}</StyledHeading>
          </StyledHeading>
          {formComponent}
        </StyledFormBox>
        <StyledImgBox>
          <StyledImg src={loginModalImg} alt="изображение спортивного зала" />
        </StyledImgBox>
      </StyledBox>
    </StyledWraper>
  );
};

export default LoginModalComponent;
