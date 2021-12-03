import styled from 'styled-components/native';
import { SCREEN_WIDTH } from '../../../helpers/DimensionsHelper';
import { Colors } from '../../../styles/Colors';

export const CommentsWrapper = styled.View`
  width: ${SCREEN_WIDTH}px;
`;

export const StyledText = styled.Text`
  color: ${Colors.moonstoneBlue};
  text-transform: uppercase;
  font-size: 13px;
  line-height: 15px;
  font-family: SFUIText-Bold;
  padding-left: 15px;
  margin-bottom: 15px;
`;

export const FormWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconContainer = styled.TouchableOpacity`
  position: absolute;
  top: 21px;
  left: 15px;
`;
