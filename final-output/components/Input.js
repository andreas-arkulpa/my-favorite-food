import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const inputStyles = StyleSheet.create({
  input: {borderColor: '#ff9100', borderWidth: 1, borderRadius: 10, paddingHorizontal: 20, paddingVertical: 12},
});

const Input = (props) => {
  return (
    <TextInput
      placeholder={props.placeholder}
      onChangeText={(text) => props.onChangeText(text)}
      value={props.value}
      style={inputStyles.input}
    />
  );
};

export default Input;
