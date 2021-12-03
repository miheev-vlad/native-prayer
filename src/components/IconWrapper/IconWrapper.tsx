import React from 'react';
import { StyledTouch } from './styles';

type IconWrapperType = {
  onPress(): void;
};

export const IconWrapper: React.FC<IconWrapperType> = ({
  children,
  ...props
}) => {
  return <StyledTouch {...props}>{children}</StyledTouch>;
};
