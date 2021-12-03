import styled from 'styled-components/native';
import { Colors } from '../../../../styles/Colors';

export const DotOptionsContainer = styled.View`
  position: absolute;
  top: 10px;
  right: 15px;
  padding: 0;
`;

export const DotStyle = styled.Text`
  color: ${Colors.rodeoDust};
  font-size: 24px;
  line-height: 12px;
  font-family: SFUIText-Bold;
`;

export const EditStyle = styled.Text`
  color: ${Colors.rodeoDust};
  font-size: 26px;
  line-height: 24px;
  font-family: SFUIText-Bold;
`;

export const DotTouch = styled.TouchableOpacity`
  padding: 0;
  margin: 0;
`;

export const DotMenuContainer = styled.View`
  position: absolute;
  top: 7px;
  right: 15px;
  padding: 3px 6px 1px 6px;
  border-radius: 5px;
  background: ${Colors.white};
  z-index: 999;
`;

export const CloseBtnContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const StyledClose = styled.Text`
  color: ${Colors.rodeoDust};
  font-size: 16px;
  line-height: 15px;
  font-family: SFUIText-Bold;
`;

export const StyledMenu = styled.Text`
  color: ${Colors.liver};
  font-size: 16px;
  line-height: 20px;
  font-family: SFUIText-Medium;
  margin-top: -2px;
  margin-bottom: 4px;
`;

export const StyledDelete = styled.Text`
  color: ${Colors.roseVale};
  font-size: 16px;
  line-height: 20px;
  font-family: SFUIText-Medium;
`;
