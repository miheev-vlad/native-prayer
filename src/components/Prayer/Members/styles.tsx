import styled from 'styled-components/native';
import { Colors } from '../../../styles/Colors';
import { SCREEN_WIDTH } from './Members';

export const MembersContainer = styled.View`
  width: ${SCREEN_WIDTH}px;
  margin-bottom: 30px;
`;

export const MemberItemWrapp = styled.View`
  margin-left: 10px;
`;

export const MemberItem = styled.Image`
  height: 32px;
  width: 32px;
  border-radius: 16px;
`;

export const StyledText = styled.Text`
  color: ${Colors.moonstoneBlue};
  text-transform: uppercase;
  font-size: 13px;
  line-height: 15px;
  font-family: SFUIText-Bold;
  padding-left: 15px;
`;

export const AddBtnContainer = styled.TouchableOpacity`
  height: 32px;
  width: 32px;
  border-radius: 16px;
  background-color: ${Colors.rodeoDust};
  text-align: center;
  align-items: center;
  justify-content: center;
`;
