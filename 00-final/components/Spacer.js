import React from 'react';
import {StyleSheet, View} from 'react-native';

const spacerStyles = StyleSheet.create({spacer: {height: 25, width: 25}});

const Spacer = (props) => <View style={spacerStyles.spacer} />;

export default Spacer;
