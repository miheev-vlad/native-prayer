import React from 'react';
import { StyledContainer, StyledText } from './styles';

const PrayerTitle: React.FC = ({ children }) => {
  return (
    <StyledContainer>
      <StyledText>{children}</StyledText>
    </StyledContainer>
  );
};

export default PrayerTitle;
