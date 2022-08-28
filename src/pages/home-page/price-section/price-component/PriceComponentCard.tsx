import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box } from '@mui/material';
import {
  StyledBox,
  StyledButton,
  StyledButtonWraper,
  StyledList,
  StyledListItem,
  StyledMainBox,
  StyledMainButton,
  StyledMainItem,
  StyledMainName,
  StyledMainPriceContainer,
  StyledMainPriceText,
  StyledName,
  StyledPriceContainer,
  StyledPriceText,
} from './StyledPriceComponent';
import { routes } from '../../../../utils/routes';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { addTraining } from '../../../../store/reducers/trainingReducers';

interface IProps {
  name: string;
  price: number;
  listItem: string[];
  styledBox: boolean;
}

const PriceComponentCard: React.FC<IProps> = ({
  name,
  price,
  listItem,
  styledBox = false,
}) => {
  const dispatch = useAppDispatch();

  const isLogin = useAppSelector(({ trainingReducers }) => {
    return trainingReducers.login;
  });

  const addTrainingState = () => {
    dispatch(
      addTraining({
        nameMail: isLogin.nameMail,
        email: isLogin.nameMail,
        id: isLogin.id,
        training: name,
        remember: isLogin.remember,
      })
    );
  };

  return (
    <Box>
      {styledBox ? (
        <StyledMainBox>
          <StyledMainName>{name}</StyledMainName>
          <StyledMainPriceContainer>{price}$</StyledMainPriceContainer>
          <StyledMainPriceText>/month</StyledMainPriceText>
          <StyledList>
            {listItem.map((element) => {
              return (
                <StyledMainItem key={Math.floor(Math.random() * 1000) + 1}>
                  <CheckCircleIcon sx={{ marginRight: '10px' }} />
                  {element}
                </StyledMainItem>
              );
            })}
          </StyledList>
          <StyledButtonWraper>
            <StyledMainButton
              onClick={addTrainingState}
              to={
                isLogin.nameMail.length > 0
                  ? routes.ACCOUNT_ROUTE
                  : routes.LOGIN_ROUTE
              }
            >
              Join now
            </StyledMainButton>
          </StyledButtonWraper>
        </StyledMainBox>
      ) : (
        <StyledBox>
          <StyledName>{name}</StyledName>
          <StyledPriceContainer>{price}$</StyledPriceContainer>
          <StyledPriceText>/month</StyledPriceText>
          <StyledList>
            {listItem.map((element) => {
              return (
                <StyledListItem key={Math.floor(Math.random() * 1000) + 1}>
                  <CheckCircleIcon sx={{ marginRight: '10px' }} />
                  {element}
                </StyledListItem>
              );
            })}
          </StyledList>
          <StyledButtonWraper>
            <StyledButton
              onClick={addTrainingState}
              to={
                isLogin.nameMail.length > 0
                  ? routes.ACCOUNT_ROUTE
                  : routes.LOGIN_ROUTE
              }
            >
              Join now
            </StyledButton>
          </StyledButtonWraper>
        </StyledBox>
      )}
    </Box>
  );
};

export default PriceComponentCard;
