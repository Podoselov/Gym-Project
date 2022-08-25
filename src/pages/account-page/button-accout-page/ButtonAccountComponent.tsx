import React from 'react';
import {
  StyledButtonBuyMore,
  StyledButtonExit,
  StyledButtonWraper,
} from './StyledButtonAccount';

interface IProps {
  actionButton: () => void;
  actionButtonExit: () => void;
}

const ButtonAccountComponent: React.FC<IProps> = ({
  actionButton,
  actionButtonExit,
}) => {
  return (
    <StyledButtonWraper>
      <StyledButtonBuyMore onClick={actionButton}>BUY MORE</StyledButtonBuyMore>
      <StyledButtonExit onClick={actionButtonExit}>Exit</StyledButtonExit>
    </StyledButtonWraper>
  );
};

export default ButtonAccountComponent;
