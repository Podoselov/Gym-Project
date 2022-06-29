import React from 'react';
import {
  StyledCardWraper,
  StyledName,
  StyledNameBox,
  StyledSpan,
  StyledText,
  StyledTextWraper,
} from './StyledCommunityCardComponent';

interface IProps {
  img: string;
  text: string;
  name: string;
}

const CommunityCardComponent: React.FC<IProps> = ({ img, text, name }) => {
  return (
    <StyledCardWraper>
      <img
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        src={img}
        alt="фото комментария"
      />
      <StyledTextWraper>
        <StyledText>{text}</StyledText>
        <StyledNameBox>
          <StyledSpan>~</StyledSpan>
          <StyledName>{name}</StyledName>
        </StyledNameBox>
      </StyledTextWraper>
    </StyledCardWraper>
  );
};

export default CommunityCardComponent;
