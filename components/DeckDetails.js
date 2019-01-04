import React, { Component } from 'react';
import { View, Button } from 'react-native';
import Deck from './Deck';

class DeckDetails extends Component {
  addCard = () => {};

  startQuiz = () => {};

  deleteDeck = () => {};

  render() {
    return (
      <View>
        <Deck title="Deck 1" totalCards={3} />

        <Button title="Add Card" onPress={this.addCard} />

        <Button title="Start Quiz" onPress={this.startQuiz} />

        <Button title="Delete Deck" onPress={this.deleteDeck} />
      </View>
    );
  }
}

export default DeckDetails;
