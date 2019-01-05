import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Constants } from 'expo';

const AppStatusBar = ({ backgroundColor, ...props }) => (
  <SafeAreaView
    style={{
      backgroundColor,
      height: Constants.statusBarHeight,
    }}
  >
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </SafeAreaView>
);

export default AppStatusBar;
