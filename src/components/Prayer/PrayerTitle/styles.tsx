import styled from 'styled-components/native';
import { Colors } from '../../../styles/Colors';
import { SCREEN_WIDTH } from './PrayerTitle';

export const StyledContainer = styled.View`
  width: ${SCREEN_WIDTH}px;
  background-color: ${Colors.rodeoDust};
`;

export const StyledText = styled.Text`
  color: ${Colors.white};
  font-size: 17px;
  line-height: 27px;
  font-family: SFUIText-Regular;
  padding: 0 15px 23px 15px;
`;
