import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';
import { purple } from '../utils/colors';

const styles = StyleSheet.create({
  cardText: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  linkText: {
    color: purple,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});
class Card extends Component {
  state = {
    showAnswer: false,
  };

  onToggleQuestionAnswer = () => {
    const { showAnswer } = this.state;

    this.setState({ showAnswer: !showAnswer });
  };

  render() {
    const { showAnswer } = this.state;
    const { question, answer } = this.props;

    return (
      <View>
        <Text style={styles.cardText}>{showAnswer ? answer : question}</Text>

        <TouchableOpacity onPress={this.onToggleQuestionAnswer}>
          <Text style={styles.linkText}>{showAnswer ? 'Back to Question' : 'Show Answer'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Card;
