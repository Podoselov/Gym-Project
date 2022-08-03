import React from 'react';
import { Link } from 'react-router-dom';
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
import { routes } from '../../utils/routes';
import {
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
  return (
    <StyledWraper>
      <StyledHeaderWraperBox>
        <StyledHeaderWraper>
          <MainLogoComponent />
          <Link to={routes.HOME_ROUTE}>
            <StyledCloseIcon />
          </Link>
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
