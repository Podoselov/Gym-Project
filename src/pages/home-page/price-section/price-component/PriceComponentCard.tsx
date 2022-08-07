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
            <StyledMainButton to={routes.LOGIN_ROUTE}>
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
            <StyledButton to={routes.LOGIN_ROUTE}>Join now</StyledButton>
          </StyledButtonWraper>
        </StyledBox>
      )}
    </Box>
  );
};

export default PriceComponentCard;
