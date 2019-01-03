import React from 'react';
import { View, Text } from 'react-native';

const Deck = ({ title, totalCards = 0 }) => (
  <View>
    <Text>{title}</Text>
    <Text>{`${totalCards} card(s)`}</Text>
  </View>
);

export default Deck;
