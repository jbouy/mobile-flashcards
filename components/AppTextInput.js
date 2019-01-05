import React from 'react';
import {
  View, TextInput, StyleSheet, Platform,
} from 'react-native';
import { white, gray } from '../utils/colors';

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: gray,
    backgroundColor: white,
    padding: Platform.OS === 'ios' ? 10 : 5,
  },
});

const AppTextInput = ({ style, ...rest }) => (
  <View>
    <TextInput style={[styles.textInput, style]} {...rest} />
  </View>
);

export default AppTextInput;
