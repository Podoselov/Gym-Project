import React from 'react';
import {
  StyledHeaderContainer,
  StyledHeaderWraper,
  StyledImgWraper,
  StyledUserNameWraper,
} from './StyledHeaderAccount';
import img from '../user-logo/userLogo.png';

export interface UserAccount {
  name: string;
  email: string;
}

const HeaderAccount: React.FC<UserAccount> = ({ name, email }) => {
  return (
    <StyledHeaderWraper>
      <StyledHeaderContainer>
        <StyledImgWraper>
          <img alt="аватарка пользователя" src={img} />
        </StyledImgWraper>
        <StyledUserNameWraper>
          <h2>{name.length > 19 ? `${name.slice(0, 19)}...` : name}</h2>
          <p>{email.length > 19 ? `${email.slice(0, 19)}...` : email}</p>
        </StyledUserNameWraper>
      </StyledHeaderContainer>
    </StyledHeaderWraper>
  );
};

export default HeaderAccount;
