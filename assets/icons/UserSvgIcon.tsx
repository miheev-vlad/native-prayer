import * as React from 'react';
import Svg, { EMaskUnits, G, Mask, Path } from 'react-native-svg';
import { Colors } from '../../src/styles/Colors';

export const UserSvgIcon = () => {
  return (
    <Svg width={29} height={23} fill="none">
      <Mask
        id="prefix__a"
        maskUnits={'useSpaceOnUse' as EMaskUnits.USER_SPACE_ON_USE}
        x={0}
        y={0}
        width={17}
        height={20}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.5 0a5 5 0 100 10 5 5 0 000-10zm-3 5a3 3 0 116 0 3 3 0 01-6 0zM5 12a5 5 0 00-5 5v2a1 1 0 102 0v-2a3 3 0 013-3h7a3 3 0 013 3v2a1 1 0 102 0v-2a5 5 0 00-5-5H5z"
          fill={Colors.white}
        />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path fill={Colors.moonstoneBlue} d="M-4-2h24v24H-4z" />
      </G>
    </Svg>
  );
};
