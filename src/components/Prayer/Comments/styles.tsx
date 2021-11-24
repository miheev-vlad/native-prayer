import styled from 'styled-components/native';
import { Colors } from '../../../styles/Colors';
import { SCREEN_WIDTH } from './Comments';

export const CommentsWrapp = styled.View`
  width: ${SCREEN_WIDTH}px;
`;

export const CommentCard = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 15px 0 0 0;
  height: 74px;
  border-top-color: ${Colors.mercury};
  border-top-width: 1px;
  border-bottom-color: ${Colors.mercury};
  border-bottom-width: 1px;
`;

export const AvatarImg = styled.Image`
  margin: 0 11px 0 15px;
  height: 40px;
  width: 40px;
  border-radius: 20px;
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

export const StyledName = styled.Text`
  color: ${Colors.liver};
  font-size: 17px;
  line-height: 20px;
  font-family: SFUIText-Bold;
`;

export const CommentText = styled.Text`
  color: ${Colors.liver};
  font-size: 17px;
  line-height: 20px;
  font-family: SFUIText-Regular;
`;

export const CommentDate = styled.Text`
  color: ${Colors.starDust};
  font-size: 13px;
  line-height: 16px;
  font-family: SFUIText-Regular;
  margin-left: 8px;
`;

export const CommentNameContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const FormWrapp = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconContainer = styled.TouchableOpacity`
  position: absolute;
  top: 21px;
  left: 15px;
`;
