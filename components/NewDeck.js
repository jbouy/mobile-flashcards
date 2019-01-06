import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createActions, isBusy, onSuccess } from 'actionware';
import { View, Text, StyleSheet } from 'react-native';
import { addNewDeck } from '../actions/decks';
import { lightGray, red } from '../utils/colors';
import AppButton from './AppButton';
import AppTextInput from './AppTextInput';

const actions = createActions({
  addNewDeck,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: lightGray,
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 10,
  },
  deckTitle: {
    marginBottom: 10,
  },
  errorMessage: {
    color: red,
    textAlign: 'center',
  },
  submitButton: {
    marginTop: 'auto',
  },
});

class NewDeck extends Component {
  state = {
    title: '',
    error: null,
  };

  componentDidMount() {
    const { navigation } = this.props;

    onSuccess(addNewDeck, ({ payload }) => navigation.navigate('DeckDetails', { id: payload.id, title: payload.title }));
  }

  submit = async () => {
    const { title } = this.state;

    this.setState({ error: null });

    try {
      await actions.addNewDeck(title);
      this.setState({ title: '' });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error, title } = this.state;
    const { loading } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.header}>What is the title of your new deck?</Text>

        <AppTextInput
          style={styles.deckTitle}
          placeholder="Deck Title"
          value={title}
          onChangeText={text => this.setState({ title: text })}
        />

        {error && <Text style={styles.errorMessage}>{error.message}</Text>}

        <AppButton
          disabled={loading}
          style={styles.submitButton}
          title="Submit"
          onPress={this.submit}
        />
      </View>
    );
  }
}

const mapStateToProps = () => ({
  loading: isBusy(addNewDeck),
});

export default connect(mapStateToProps)(NewDeck);
