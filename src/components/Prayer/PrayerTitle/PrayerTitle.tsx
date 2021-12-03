import React from 'react';
import { Dimensions } from 'react-native';
import { StyledContainer, StyledText } from './styles';

export const SCREEN_WIDTH = Dimensions.get('window').width;

export const PrayerTitle: React.FC = ({ children }) => {
  return (
    <StyledContainer>
      <StyledText>{children}</StyledText>
    </StyledContainer>
  );
};
