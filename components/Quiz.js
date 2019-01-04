import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import Card from './Card';

class Quiz extends Component {
  onCorrect = () => {};

  onIncorrect = () => {};

  render() {
    return (
      <View>
        <Text>Sorry, you cannot take a quiz because there are no cards in the deck.</Text>

        <View>
          <Text>2/2</Text>

          <Card question="What is the answer?" answer="This is the answer!" />

          <Button title="Correct" onPress={this.onCorrect} />
          <Button title="Incorrect" onPress={this.onIncorrect} />
        </View>
      </View>
    );
  }
}

export default Quiz;
