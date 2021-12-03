import styled from 'styled-components/native';
import { SCREEN_WIDTH } from '../../helpers/DimensionsHelper';
import { Colors } from '../../styles/Colors';

export const InputWrapp = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledTextInput = styled.TextInput.attrs(
  (props: { error: boolean }) => props,
)`
  width: ${SCREEN_WIDTH - 30}px;
  height: 50px;
  padding: 15px 15px 15px 52px;
  border-radius: 10px;
  border-width: 1px;
  font-size: 17px;
  font-family: SFUIText-Regular;
  line-height: 20px;
  color: ${Colors.liver};
  border-color: ${(props) => (props.error ? Colors.roseVale : Colors.mercury)};
`;

export const ErrorText = styled.Text`
  color: ${Colors.roseVale};
  font-size: 17px;
`;
