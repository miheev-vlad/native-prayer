import styled from 'styled-components/native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../helpers/DimensionsHelper';
import { Colors } from '../../styles/Colors';

export const BackDropp = styled.View`
  position: absolute;
  width: ${SCREEN_WIDTH}px;
  height: ${SCREEN_HEIGHT}px;
  background-color: transparent;
`;

export const BackDroppTouch = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
`;

export const ModalContainer = styled.View`
  position: absolute;
  top: 20px;
  right: 15px;
  margin-top: 24px;
`;

export const StyledText = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: ${Colors.liver};
  font-family: SFUIText-Medium;
  margin-bottom: 8px;
  margin-top: 10px;
`;

export const StyledTextDelete = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: ${Colors.roseVale};
  font-family: SFUIText-Medium;
  margin-bottom: 16px;
  margin-top: 10px;
`;

export const StyledMenu = styled.View`
  background-color: ${Colors.white};
  padding: 0 10px;
  border-radius: 6px;
`;

export const ArrowStyle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${Colors.moonstoneBlue};
`;
