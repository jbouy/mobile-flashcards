import React from 'react';
import { View, StatusBar as ReactStatusBar } from 'react-native';
import { Constants } from 'expo';

const StatusBar = ({ backgroundColor, ...props }) => (
  <View
    style={{
      height: Constants.statusBarHeight,
    }}
  >
    <ReactStatusBar {...props} />
  </View>
);

export default StatusBar;
