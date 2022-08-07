import React from 'react';
import { useNavigate } from 'react-router-dom';
import { jsx } from '@emotion/react';
import {
  StyledBox,
  StyledFormBox,
  StyledHeaderWraperBox,
  StyledHeading,
  StyledImg,
  StyledImgBox,
  StyledWraper,
} from './StyledLoginModal';
import loginModalImg from './form-login-component/login-modal-img/loginModalImg.png';
import MainLogoComponent from '../navigation-component/main-logo/MainLogoComponent';
import {
  StyledButton,
  StyledCloseIcon,
  StyledHeaderWraper,
} from '../navigation-component/navigation-menu/StyledNavigationMenuComponent';

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
  const navigate = useNavigate();

  const closeMenuIconClick = () => navigate(-1);

  return (
    <StyledWraper>
      <StyledHeaderWraperBox>
        <StyledHeaderWraper>
          <MainLogoComponent />
          <StyledButton onClick={closeMenuIconClick}>
            <StyledCloseIcon />
          </StyledButton>
        </StyledHeaderWraper>
      </StyledHeaderWraperBox>
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
