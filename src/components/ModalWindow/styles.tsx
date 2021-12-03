import styled from 'styled-components/native';
import { Colors } from '../../styles/Colors';

export const CloseBtnContainer = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  border: 1px solid ${Colors.liver};
  align-items: center;
  justify-content: center;
  margin: 15px 15px 0 0;
`;

export const CloseBtnWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
export const HeadingWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
`;
export const StyledText = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: ${Colors.liver};
  font-family: SFUIText-Bold;
  margin-bottom: 14px;
  margin-top: 6px;
`;

export const FormContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
