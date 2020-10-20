import React from 'react';
import {StyleSheet, View} from 'react-native';

const screenStyles = StyleSheet.create({
  screen: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
  },
});

const Screen = (props) => <View style={screenStyles.screen}>{props.children}</View>;

export default Screen;
