import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Deck from './Deck';

const DeckList = props => (
  <View>
    <TouchableOpacity onPress={() => props.navigation.navigate('DeckDetails')}>
      <Deck title="Deck 1" totalCards={3} />
    </TouchableOpacity>

    <TouchableOpacity onPress={() => props.navigation.navigate('DeckDetails')}>
      <Deck title="Deck 2" totalCards={1} />
    </TouchableOpacity>

    <TouchableOpacity onPress={() => props.navigation.navigate('DeckDetails')}>
      <Deck title="Deck 3" totalCards={5} />
    </TouchableOpacity>
  </View>
);

export default DeckList;
