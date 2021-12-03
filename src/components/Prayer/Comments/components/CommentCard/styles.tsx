import styled from 'styled-components/native';
import { Colors } from '../../../../../styles/Colors';

export const CommentCardContainer = styled.View`
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

export const FormContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconContainerUpdate = styled.TouchableOpacity`
  position: absolute;
  top: 28px;
  right: 43px;
  height: 24px;
  width: 24px;
  border-radius: 12px;
  background-color: ${Colors.rodeoDust};
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const IconContainerUnUpdate = styled.TouchableOpacity`
  position: absolute;
  top: 28px;
  right: 15px;
  height: 24px;
  width: 24px;
  border-radius: 12px;
  background-color: ${Colors.white};
  text-align: center;
  align-items: center;
  justify-content: center;
  border: 2px solid ${Colors.rodeoDust};
`;

export const FormWrapper = styled.View`
  position: absolute;
  top: 0px;
  left: 0;
  margin-left: -30px;
`;

export const BtnContainer = styled.TouchableOpacity`
  height: 32px;
  width: 32px;
  border-radius: 16px;
  background-color: ${Colors.rodeoDust};
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const BtnText = styled.Text`
  color: ${Colors.white};
  font-size: 11px;
  font-family: SFUIText-Bold;
`;

export const BtnCloseText = styled.Text`
  color: ${Colors.rodeoDust};
  font-size: 14px;
  line-height: 16px;
  font-family: SFUIText-Bold;
`;
