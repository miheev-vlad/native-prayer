import styled from 'styled-components/native';
import { Colors } from '../../styles/Colors';

export const StyledTouch = styled.TouchableOpacity`
  width: 100%;
  border: 1px solid ${Colors.mercury};
  border-radius: 4px;
  padding: 20px 15px;
  margin-bottom: 10px;
`;

export const StyledText = styled.Text`
  color: ${Colors.liver};
  font-size: 17px;
  line-height: 20px;
  font-family: SFUIText-Bold;
`;
