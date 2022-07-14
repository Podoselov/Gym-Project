import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box } from '@mui/material';
import {
  StyledBox,
  StyledName,
  StyledPriceContainer,
  StyledPriceText,
  StyledList,
  StyledListItem,
  StyledButton,
  StyledMainBox,
  StyledMainButton,
  StyledMainItem,
  StyledMainName,
  StyledMainPriceContainer,
  StyledMainPriceText,
  StyledButtonWraper,
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
                <StyledMainItem>
                  <CheckCircleIcon sx={{ marginRight: '10px' }} key={name} />
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
                <StyledListItem>
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
