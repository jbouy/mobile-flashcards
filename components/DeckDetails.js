import React, { Component } from 'react';
import { View, Button } from 'react-native';
import Deck from './Deck';

class DeckDetails extends Component {
  static navigationOptions = () => ({
    title: 'Deck 1',
  });

  addCard = () => {
    const { navigation } = this.props;

    navigation.navigate('AddCard');
  };

  startQuiz = () => {
    const { navigation } = this.props;

    navigation.navigate('Quiz');
  };

  deleteDeck = () => {
    const { navigation } = this.props;

    navigation.navigate('Home');
  };

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
