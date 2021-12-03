import styled from 'styled-components/native';
import { SCREEN_WIDTH } from '../../../helpers/DimensionsHelper';
import { Colors } from '../../../styles/Colors';

export const TableContainer = styled.View`
  width: ${SCREEN_WIDTH}px;
  margin-bottom: 20px;
`;

export const StyledRowTop = styled.View`
  flex-direction: row;
  border-top-width: 1px;
  border-top-color: ${Colors.mercury};
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.mercury};
`;

export const StyledColumnLeft = styled.View`
  width: ${SCREEN_WIDTH / 2}px;
  height: 108px;
  border-right-color: ${Colors.mercury};
  border-right-width: 1px;
  padding-left: 15px;
  padding-top: 26px;
`;

export const StyledColumnRight = styled.View`
  width: ${SCREEN_WIDTH / 2}px;
  height: 108px;
  padding-left: 15px;
  padding-top: 26px;
`;

export const StyledRowBottom = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.mercury};
`;

export const PrayerDate = styled.Text`
  color: ${Colors.rodeoDust};
  font-size: 22px;
  line-height: 26px;
  font-family: SFUIText-Regular;
  padding: 5px 0;
`;

export const StyledDataName = styled.Text`
  color: ${Colors.liver};
  font-size: 13px;
  line-height: 15px;
  font-family: SFUIText-Regular;
`;

export const StyledDataValue = styled.Text`
  color: ${Colors.rodeoDust};
  font-size: 32px;
  line-height: 37px;
  font-family: SFUIText-Regular;
`;

export const StyledOpenedDate = styled.Text`
  color: ${Colors.moonstoneBlue};
  font-size: 13px;
  line-height: 15px;
  font-family: SFUIText-Regular;
`;
