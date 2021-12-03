import React from 'react';
import { StyledContainer, StyledText } from './styles';

export const PrayerTitle: React.FC = ({ children }) => {
  return (
    <StyledContainer>
      <StyledText>{children}</StyledText>
    </StyledContainer>
  );
};
