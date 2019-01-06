import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { black, gray } from '../utils/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 7,
    color: black,
  },
  total: {
    color: gray,
  },
});

const Deck = ({ title, totalCards = 0 }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.total}>{`${totalCards} card(s)`}</Text>
  </View>
);

export default Deck;
