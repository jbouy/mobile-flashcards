import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';

class AddCard extends Component {
  submit = () => {
    const { navigation } = this.props;

    navigation.navigate('DeckDetails');
  };

  render() {
    return (
      <View>
        <TextInput placeholder="Question" />

        <TextInput placeholder="Answer" />

        <Button title="Submit" onPress={this.submit} />
      </View>
    );
  }
}

export default AddCard;
