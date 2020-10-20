import React from 'react';
import {StyleSheet, View} from 'react-native';

const screenStyles = StyleSheet.create({
  screen: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
  },
  screenScroll: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
});

const Screen = (props) => (
  <View style={props.scroll ? screenStyles.screenScroll : screenStyles.screen}>{props.children}</View>
);

export default Screen;
