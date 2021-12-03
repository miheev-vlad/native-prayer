import React from 'react';
import { StateSvgIcon } from '../../../../assets/icons/StateSvgIcon';
import { Colors } from '../../../styles/Colors';
import { StyledContainer, StyledText } from './styles';

const PrayerData: React.FC = ({ children }) => {
  return (
    <StyledContainer>
      <StateSvgIcon color={Colors.roseVale} />
      <StyledText>{children}</StyledText>
    </StyledContainer>
  );
};

export default PrayerData;
