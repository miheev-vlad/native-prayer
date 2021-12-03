import styled from 'styled-components/native';
import { Colors } from '../../styles/Colors';

export const StyledTouchOpacity = styled.TouchableOpacity`
  background-color: ${Colors.rodeoDust};
  width: 209px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  padding: 8px 17px 7px 17px;
  margin-bottom: 20px;
`;

export const StyledText = styled.Text`
  color: ${Colors.white};
  font-size: 12px;
  line-height: 14px;
  font-family: SFUIText-Bold;
  text-transform: uppercase;
`;
