import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const buttonStyles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ff9100',
    borderRadius: 10,
    padding: 20,
    width: '100%',
  },
  wrapperDisabled: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffb95d',
    borderRadius: 10,
    padding: 20,
    width: '100%',
  },
  label: {
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

const Button = (props) => (
  <TouchableOpacity
    disabled={props.disabled}
    underlayColor={'#ffb95d'}
    onPress={() => props.onPress()}
    style={props.disabled ? buttonStyles.wrapperDisabled : buttonStyles.wrapper}>
    <Text style={buttonStyles.label}>{props.label}</Text>
  </TouchableOpacity>
);

export default Button;
