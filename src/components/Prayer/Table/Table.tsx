import React from 'react';
import {
  PrayerDate,
  StyledColumnLeft,
  StyledColumnRight,
  StyledDataName,
  StyledDataValue,
  StyledOpenedDate,
  StyledRowBottom,
  StyledRowTop,
  TableContainer,
} from './styles';

export const Table: React.FC = () => {
  return (
    <TableContainer>
      <StyledRowTop>
        <StyledColumnLeft>
          <PrayerDate>July 25 2017</PrayerDate>
          <StyledDataName>Date Added</StyledDataName>
          <StyledOpenedDate>Opened for 4 days</StyledOpenedDate>
        </StyledColumnLeft>
        <StyledColumnRight>
          <StyledDataValue>123</StyledDataValue>
          <StyledDataName>Times Prayed Total</StyledDataName>
        </StyledColumnRight>
      </StyledRowTop>
      <StyledRowBottom>
        <StyledColumnLeft>
          <StyledDataValue>63</StyledDataValue>
          <StyledDataName>Times Prayed by Me</StyledDataName>
        </StyledColumnLeft>
        <StyledColumnRight>
          <StyledDataValue>60</StyledDataValue>
          <StyledDataName>Times Prayed by Others</StyledDataName>
        </StyledColumnRight>
      </StyledRowBottom>
    </TableContainer>
  );
};
