import React from 'react';
import { StyledTouch } from './styles';

type IconWrapperType = {
  onPress(): void;
};

const IconWrapper: React.FC<IconWrapperType> = ({ children, ...props }) => {
  return <StyledTouch {...props}>{children}</StyledTouch>;
};

export default IconWrapper;
