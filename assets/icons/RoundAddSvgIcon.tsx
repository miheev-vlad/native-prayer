import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '../../src/styles/Colors';

export const RoundAddSvgIcon = () => {
  return (
    <Svg width={16} height={16} fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 1a1 1 0 10-2 0v6H1a1 1 0 000 2h6v6a1 1 0 102 0V9h6a1 1 0 100-2H9V1z"
        fill={Colors.white}
      />
    </Svg>
  );
};
