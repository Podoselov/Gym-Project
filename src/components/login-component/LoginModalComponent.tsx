import React from 'react';
import { Modal } from '@mui/material';
import { LoginForm } from './form-login-component/LoginForm';
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
  open: boolean;
  setOpen: (arg: boolean) => void;
  handleClose: () => void;
}

const LoginModalComponent: React.FC<IProps> = ({
  open,
  setOpen,
  handleClose,
}) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <StyledWraper>
        <StyledBox>
          <StyledFormBox>
            <StyledHeading sx={{ paddingTop: '10px' }}>
              WELCOME BACK,
              <StyledHeading>PLEASE LOGIN TO YOU ACCOUNT</StyledHeading>
            </StyledHeading>
            <LoginForm />
          </StyledFormBox>
          <StyledImgBox>
            <StyledImg src={loginModalImg} alt="изображение спортивного зала" />
          </StyledImgBox>
        </StyledBox>
      </StyledWraper>
    </Modal>
  );
};

export default LoginModalComponent;
