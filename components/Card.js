import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

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
        <Text>{showAnswer ? answer : question}</Text>

        <TouchableOpacity onPress={this.onToggleQuestionAnswer}>
          <Text>{showAnswer ? 'Question' : 'Answer'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Card;
