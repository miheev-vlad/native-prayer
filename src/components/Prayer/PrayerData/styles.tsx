import styled from 'styled-components/native';
import { Colors } from '../../../styles/Colors';

export const StyledContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 15px;
  justify-content: flex-start;
`;

export const StyledText = styled.Text`
  color: ${Colors.liver};
  font-size: 17px;
  line-height: 20px;
  font-family: SFUIText-Regular;
  margin-left: 12px;
`;
