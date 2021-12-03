import * as React from 'react';
import Svg, { EMaskUnits, G, Mask, Path } from 'react-native-svg';
import { Colors } from '../../src/styles/Colors';

export const BackSvgIcon = () => {
  return (
    <Svg width={18} height={16} fill="none">
      <Mask
        id="prefix__a"
        maskUnits={'useSpaceOnUse' as EMaskUnits.USER_SPACE_ON_USE}
        x={0}
        y={0}
        width={18}
        height={16}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.707 1.707A1 1 0 0 0 7.293.293l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L3.414 9H17a1 1 0 0 0 0-2H3.414l5.293-5.293Z"
          fill={Colors.white}
        />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path fill={Colors.white} d="M-3-4h24v24H-3z" />
      </G>
    </Svg>
  );
};
