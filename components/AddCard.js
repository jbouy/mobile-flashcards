import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createActions, isBusy } from 'actionware';
import {
  View, Text, StyleSheet, Platform,
} from 'react-native';
import { addCardToDeck } from '../actions/decks';
import { lightGray, red } from '../utils/colors';
import AppButton from './AppButton';
import AppTextInput from './AppTextInput';

const actions = createActions({
  addCardToDeck,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: lightGray,
  },
  headerText: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  textInput: {
    marginBottom: 15,
    minHeight: 60,
    ...Platform.select({
      android: {
        textAlignVertical: 'top',
      },
    }),
  },
  errorMessage: {
    color: red,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 30,
  },
  submitButton: {
    marginTop: 'auto',
    paddingBottom: 50,
  },
});

class AddCard extends Component {
  state = {
    error: null,
    question: '',
    answer: '',
  };

  validate = () => {
    const { question, answer } = this.state;

    if (!question || !answer) {
      this.setState({ error: new Error('Question and answer are required.') });
      return false;
    }

    return true;
  };

  onSubmit = async () => {
    this.setState({ error: null });
    if (!this.validate()) return;

    const { navigation, deck } = this.props;
    const { question, answer } = this.state;

    try {
      await actions.addCardToDeck(deck.id, { question, answer });
      this.setState({ question: '', answer: '' }, () => navigation.navigate('DeckDetails', { id: deck.id }));
    } catch (error) {
      this.setState({ error });
    }

    navigation.navigate('DeckDetails');
  };

  render() {
    const { question, answer, error } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Add the question and answer for this flash card.</Text>

        <AppTextInput
          style={styles.textInput}
          placeholder="Question"
          multiline
          value={question}
          onChangeText={text => this.setState({ question: text })}
        />

        <AppTextInput
          style={styles.textInput}
          placeholder="Answer"
          multiline
          value={answer}
          onChangeText={text => this.setState({ answer: text })}
        />

        {error && <Text style={styles.errorMessage}>{error.message}</Text>}

        <AppButton style={styles.submitButton} title="Submit" onPress={this.onSubmit} />
      </View>
    );
  }
}

const mapStateToProps = ({ decks }, { navigation }) => {
  const id = navigation.getParam('id');

  return {
    loading: isBusy(addCardToDeck),
    deck: decks[id],
  };
};

export default connect(mapStateToProps)(AddCard);
