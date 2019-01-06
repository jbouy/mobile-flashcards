import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { lightGray, purple } from '../utils/colors';
import AppButton from './AppButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: lightGray,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  percentage: {
    fontSize: 70,
    color: purple,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  correct: {
    fontWeight: 'bold',
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

const Results = ({ navigation }) => {
  const { id, title, results } = navigation.state.params;
  const { correct, total } = results;
  const percentage = Math.floor((correct / total) * 100);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Quiz Completed</Text>

      <View style={styles.results}>
        <Text style={styles.percentage}>{`${percentage}%`}</Text>
        <Text style={styles.correct}>{`${correct} correct out of ${total} question(s)`}</Text>
      </View>

      <View style={styles.buttons}>
        <AppButton
          style={styles.button}
          title="Restart Quiz"
          onPress={() => navigation.navigate('Quiz', { id })}
        />
        <AppButton
          style={styles.button}
          title="Back to Deck"
          onPress={() => navigation.navigate('DeckDetails', { id, title })}
        />
      </View>
    </View>
  );
};

export default Results;
