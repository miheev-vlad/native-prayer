import React from 'react';
import { StyledTouch } from './styles';

type IconWrappType = {
  onPress(): void;
};

export const IconWrapp: React.FC<IconWrappType> = ({ children, ...props }) => {
  return <StyledTouch {...props}>{children}</StyledTouch>;
};
