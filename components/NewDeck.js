import React, { Component } from 'react';
import {
  View, Button, TextInput, Text,
} from 'react-native';

class NewDeck extends Component {
  submit = () => {
    const { navigation } = this.props;

    navigation.navigate('DeckList');
  };

  render() {
    return (
      <View>
        <Text>What is the title of your new deck?</Text>

        <TextInput placeholder="Deck Title" />

        <Button title="Submit" onPress={this.submit} />
      </View>
    );
  }
}

export default NewDeck;
