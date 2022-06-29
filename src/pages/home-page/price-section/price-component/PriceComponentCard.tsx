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
} from './StyledPriceComponent';

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
                  <CheckCircleIcon sx={{ marginRight: '10px' }} />
                  {element}
                </StyledMainItem>
              );
            })}
          </StyledList>
          <StyledMainButton>Join now</StyledMainButton>
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
          <StyledButton>Join now</StyledButton>
        </StyledBox>
      )}
    </Box>
  );
};

export default PriceComponentCard;
