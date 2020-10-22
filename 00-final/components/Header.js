import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import Constants from 'expo-constants';

const headerStyles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#ff9100',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  wrapper: {
    paddingHorizontal: 20,
    paddingTop: Constants.statusBarHeight + 30,
    paddingBottom: 40,
  },
  label: {fontSize: 25, color: 'white', fontWeight: 'bold', textAlign: 'center'},
});

const Header = (props) => (
  <SafeAreaView style={headerStyles.safeAreaView}>
    <View style={headerStyles.wrapper}>
      <Text style={headerStyles.label}>{props.label}</Text>
    </View>
  </SafeAreaView>
);

export default Header;
