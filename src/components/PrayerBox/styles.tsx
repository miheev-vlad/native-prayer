import styled from 'styled-components/native';
import { Colors } from '../../styles/Colors';
import { SCREEN_WIDTH } from './PrayerBox';

export const StyledContainerWrapp = styled.View`
  display: flex;
  flex-direction: row;
  width: ${SCREEN_WIDTH}px;
  background-color: ${Colors.white};
  justify-content: center;
`;

export const StyledContainer = styled.View`
  display: flex;
  flex-direction: row;
  height: 66px;
  width: ${SCREEN_WIDTH - 30}px;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.mercury};
`;

export const StyledGroupContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

export const StyledDeleteBtn = styled.View`
  background-color: ${Colors.roseVale};
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 68px;
`;

export const StyledText = styled.Text`
  color: ${Colors.white};
  font-size: 13px;
  line-height: 15px;
  font-family: SFUIText-Regular;
`;

export const StyledPrayerText = styled.Text`
  color: ${Colors.liver};
  font-size: 17px;
  line-height: 20px;
  font-family: SFUIText-Regular;
`;

export const IvonContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserData = styled.Text`
  color: ${Colors.liver};
  font-size: 12px;
  line-height: 14px;
  font-family: SFUIText-Regular;
  margin-left: -6px;
`;

export const LineData = styled.Text`
  color: ${Colors.liver};
  font-size: 12px;
  line-height: 14px;
  font-family: SFUIText-Regular;
  margin-left: 6px;
`;

export const StateIvonContainer = styled.View`
  padding-top: 15px;
`;

export const PrayerTextContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: -6px;
`;

export const CheckBoxContainer = styled.View`
  margin-left: 0;
`;
