import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppContainer from './AppContainer';
import AppStatusBar from './components/AppStatusBar';
import { purple } from './utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => (
  <View style={styles.container}>
    <AppStatusBar backgroundColor={purple} barStyle="light-content" />

    <AppContainer />
  </View>
);

export default App;
