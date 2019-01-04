import React from 'react';
import { View } from 'react-native';
import StatusBar from './components/StatusBar';
import Quiz from './components/Quiz';

const App = () => (
  <View>
    <StatusBar />

    <Quiz />
  </View>
);

export default App;
