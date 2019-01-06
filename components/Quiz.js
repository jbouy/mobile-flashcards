import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { lightGray } from '../utils/colors';
import { clearLocalNotification, setLocalNotification } from '../utils/notifications';
import Card from './Card';
import AppButton from './AppButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: lightGray,
  },
  totals: {
    textAlign: 'center',
    marginBottom: 10,
  },
  buttons: {
    paddingBottom: 50,
  },
  button: {
    marginBottom: 10,
  },
});

class Quiz extends Component {
  state = {
    correct: 0,
    incorrect: 0,
    currentIndex: 0,
  };

  reset = () => {
    this.setState({
      correct: 0,
      incorrect: 0,
      currentIndex: 0,
    });
  };

  onAnswerCorrect = () => {
    const { correct } = this.state;

    this.setState({ correct: correct + 1 }, () => this.goToNextQuestion());
  };

  onAnswerIncorrect = () => {
    const { incorrect } = this.state;

    this.setState({ incorrect: incorrect + 1 }, () => this.goToNextQuestion());
  };

  goToNextQuestion = () => {
    const { quizQuestions } = this.props;
    const { currentIndex } = this.state;

    if (currentIndex + 1 >= quizQuestions.length) {
      this.showResults();
      return;
    }

    this.setState({ currentIndex: currentIndex + 1 });
  };

  showResults = async () => {
    const {
      quizQuestions, navigation, id, title,
    } = this.props;
    const { correct, incorrect } = this.state;

    await clearLocalNotification();
    await setLocalNotification();

    navigation.navigate('Results', {
      id,
      title,
      results: { correct, incorrect, total: quizQuestions.length },
    });
  };

  render() {
    const { quizQuestions } = this.props;
    const { currentIndex } = this.state;
    const { question, answer } = quizQuestions[currentIndex];

    return (
      <View style={styles.container}>
        <NavigationEvents onDidBlur={this.reset} />

        <Text style={styles.totals}>
          {`Question ${currentIndex + 1} of ${quizQuestions.length}`}
        </Text>

        <Card question={question} answer={answer} />

        <View style={styles.buttons}>
          <AppButton style={styles.button} title="Correct" onPress={this.onAnswerCorrect} />
          <AppButton
            style={styles.button}
            title="Incorrect"
            state="warning"
            onPress={this.onAnswerIncorrect}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ decks }, { navigation }) => {
  const id = navigation.getParam('id');

  const deck = decks[id];
  const questions = deck && deck.questions ? deck.questions : [];
  const shuffled = _.shuffle(questions);

  return {
    id,
    title: deck ? deck.title : '',
    quizQuestions: shuffled,
  };
};

export default connect(mapStateToProps)(Quiz);
