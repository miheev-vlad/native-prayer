import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const BigAddSvgIcon = () => {
  return (
    <Svg width={24} height={24} fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 1a1 1 0 10-2 0v6H1a1 1 0 000 2h6v6a1 1 0 102 0V9h6a1 1 0 100-2H9V1z"
        fill="#72A8BC"
      />
    </Svg>
  );
};
