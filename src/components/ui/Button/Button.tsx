import React from 'react';
import {
  ActivityIndicator,
  TextProps,
  TouchableOpacityProps,
} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/configureStore';
import { Colors } from '../../../styles/Colors';
import { StyledText, StyledTouchOpacity } from './styles';

const Button: React.FC<TouchableOpacityProps & TextProps> = ({
  children,
  onPress,
}) => {
  const loading = useSelector((state: RootState) => state.auth.isLoading);

  return (
    <StyledTouchOpacity onPress={onPress} disabled={loading}>
      <StyledText>
        {loading ? (
          <ActivityIndicator size="small" color={Colors.white} />
        ) : (
          children
        )}
      </StyledText>
    </StyledTouchOpacity>
  );
};

export default Button;
