import React from 'react';
import { jsx } from '@emotion/react';
import {
  StyledModal,
  StyledWraper,
  StyledBox,
  StyledHeading,
  StyledFormBox,
  StyledImg,
  StyledImgBox,
} from './StyledLoginModal';
import loginModalImg from './form-login-component/login-modal-img/loginModalImg.png';

interface IProps {
  open: boolean;
  setOpen: (arg: boolean) => void;
  handleClose: () => void;
  firstHeading: string;
  secondHeading: string;
  formComponent: jsx.JSX.Element | jsx.JSX.Element[];
}

const LoginModalComponent: React.FC<IProps> = ({
  open,
  setOpen,
  handleClose,
  firstHeading,
  secondHeading,
  formComponent,
}) => {
  return (
    <StyledModal open={open} onClose={handleClose}>
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
    </StyledModal>
  );
};

export default LoginModalComponent;
