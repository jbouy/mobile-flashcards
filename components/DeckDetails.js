import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createActions, isBusy } from 'actionware';
import {
  View, Text, StyleSheet, Alert,
} from 'react-native';
import { removeDeck } from '../actions/decks';
import { lightGray, red } from '../utils/colors';
import Deck from './Deck';
import AppButton from './AppButton';

const actions = createActions({
  removeDeck,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: lightGray,
  },
  errorMessage: {
    color: red,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 30,
  },
  buttons: {
    marginTop: 'auto',
    paddingBottom: 50,
  },
  button: {
    marginBottom: 10,
  },
  deleteButton: {
    marginTop: 25,
  },
});

class DeckDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'Unknown Title'),
  });

  state = {
    error: null,
  };

  shouldComponentUpdate(nextProps) {
    return !!nextProps.deck;
  }

  onShowDeleteAlert = () => {
    Alert.alert('Delete Deck', 'Are you sure you want to delete this deck?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Ok', onPress: () => this.deleteDeck(), style: 'destructive' },
    ]);
  };

  deleteDeck = async () => {
    const { navigation, deck } = this.props;

    this.setState({ error: null });

    try {
      await actions.removeDeck(deck.id);
      navigation.navigate('DeckList');
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { deck, loading, navigation } = this.props;
    const { error } = this.state;
    const cardCount = deck.questions.length;

    return (
      <View style={styles.container}>
        <Deck title={deck.title} totalCards={cardCount} />

        {error && (
          <Text style={styles.errorMessage}>
            An error occurred while trying to delete the deck:
            {error.message}
          </Text>
        )}

        <View style={styles.buttons}>
          <AppButton
            title="Add Card"
            style={styles.button}
            disabled={loading}
            onPress={() => navigation.navigate('AddCard', { id: deck.id })}
          />
          <AppButton
            title="Start Quiz"
            style={styles.button}
            disabled={cardCount < 1 || loading}
            onPress={() => navigation.navigate('Quiz', { id: deck.id })}
          />
          <AppButton
            title="Delete Deck"
            style={styles.deleteButton}
            state="warning"
            disabled={loading}
            onPress={this.onShowDeleteAlert}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ decks }, { navigation }) => {
  const id = navigation.getParam('id');

  return {
    loading: isBusy(removeDeck),
    deck: decks[id],
  };
};

export default connect(mapStateToProps)(DeckDetails);
