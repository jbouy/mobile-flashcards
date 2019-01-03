import React from 'react';
import { View } from 'react-native';
import Deck from './Deck';

const DeckList = () => (
  <View>
    <Deck title="Deck 1" totalCards={3} />

    <Deck title="Deck 2" totalCards={1} />

    <Deck title="Deck 3" totalCards={5} />
  </View>
);

export default DeckList;
