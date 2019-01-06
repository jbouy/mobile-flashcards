import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isBusy, createActions, getError } from 'actionware';
import {
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Text,
  StyleSheet,
} from 'react-native';
import { loadDecks } from '../actions/decks';
import { lightGray, red, purple } from '../utils/colors';
import Deck from './Deck';
import AppButton from './AppButton';

const actions = createActions({
  loadDecks,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: lightGray,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    color: red,
    textAlign: 'center',
    marginBottom: 10,
  },
  noItemMessage: {
    textAlign: 'center',
    marginBottom: 10,
  },
});

class DeckList extends Component {
  componentDidMount() {
    this.onLoadDecks();
  }

  onLoadDecks = async () => actions.loadDecks();

  render() {
    const {
      loading, error, decks, navigation,
    } = this.props;

    if (loading) {
      return (
        <View style={[styles.container, styles.center]}>
          <ActivityIndicator color={purple} size="large" />
        </View>
      );
    }

    if (error) {
      return (
        <View style={[styles.container, styles.center]}>
          <Text style={styles.errorMessage}>
            There was an error while trying to load your decks. Please try again.
          </Text>

          <AppButton title="Reload" onPress={() => this.onLoadDecks()} />
        </View>
      );
    }

    if (!decks || decks.length < 1) {
      return (
        <View style={[styles.container, styles.center]}>
          <Text style={styles.noItemMessage}>You have no decks to view.</Text>

          <AppButton title="New Deck" onPress={() => navigation.navigate('NewDeck')} />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={decks}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('DeckDetails', { id: item.id, title: item.title })}
            >
              <Deck title={item.title} totalCards={item.questions ? item.questions.length : 0} />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ decks }) => ({
  loading: isBusy(loadDecks),
  error: getError(loadDecks),
  decks: _.map(decks, deck => ({
    key: deck.id,
    ...deck,
  })),
});

export default connect(mapStateToProps)(DeckList);
