import React from 'react';
import { View, Button } from 'react-native';
import { purple, red } from '../utils/colors';

const AppButton = ({ state = 'normal', style, ...rest }) => (
  <View style={style}>
    <Button color={state === 'warning' ? red : purple} {...rest} />
  </View>
);

export default AppButton;
