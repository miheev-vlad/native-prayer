import React from 'react';
import {Form as FinalForm} from 'react-final-form';
import {View} from 'react-native';

export const Form: React.FC<any> = props => {
  return (
    <FinalForm
      onSubmit={props.onSubmit}
      render={renderProps => <View>{props.children(renderProps)}</View>}
    />
  );
};
