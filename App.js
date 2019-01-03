import React from 'react';
import { View } from 'react-native';
import StatusBar from './components/StatusBar';
import DeckList from './components/DeckList';

const App = () => (
  <View>
    <StatusBar />

    <DeckList />
  </View>
);

export default App;
