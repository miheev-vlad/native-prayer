import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';

export const UnCheckedSvgIcon = () => {
  return (
    <Svg width={22} height={22} fill="none">
      <Rect x={0.5} y={0.5} width={21} height={21} rx={3.5} stroke="#514D47" />
    </Svg>
  );
};
