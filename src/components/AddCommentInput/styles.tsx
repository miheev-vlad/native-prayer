import styled from 'styled-components/native';
import { Colors } from '../../styles/Colors';
import { SCREEN_WIDTH } from './AddCommentInput';

export const InputWrapp = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
  margin-top: 5px;
`;

export const StyledTextInput = styled.TextInput`
  width: ${SCREEN_WIDTH - 30}px;
  height: 50px;
  padding: 15px 15px 15px 32px;
  border: 0;
  font-size: 17px;
  font-family: SFUIText-Regular;
  line-height: 20px;
  color: ${Colors.starDust};
`;

export const ErrorText = styled.Text`
  color: ${Colors.roseVale};
  font-size: 17px;
  margin-top: -15px;
`;
