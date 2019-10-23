import React, {Component} from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = ({onChangeText, value}) => (
  <TextInput
    style={styles.input}
    onChangeText={onChangeText}
    value={value}
    underlineColorAndroid="#ddd"
  />
);

const styles = StyleSheet.create({
  input: {
    paddingLeft: 15,
    borderRadius: 10,
    paddingBottom: 15,
    color: '#fff',
    fontSize: 20,
  },
});

export default Input;
