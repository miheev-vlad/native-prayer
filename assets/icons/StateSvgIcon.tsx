import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

type StateSvgIconProps = {
  color: string;
};

export const StateSvgIcon: React.FC<StateSvgIconProps> = ({ color }) => {
  return (
    <Svg width={3} height={22} fill="none">
      <Path fill={color} d="M-12-1h24v24h-24z" />
    </Svg>
  );
};
