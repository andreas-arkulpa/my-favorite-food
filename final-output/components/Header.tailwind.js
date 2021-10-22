import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Constants from 'expo-constants';
import tailwind from '../helpers/tailwind';

const Header = props => (
  <SafeAreaView style={tailwind('bg-orange rounded-b-3xl')}>
    <View style={tailwind('px-5 pb-10', {paddingTop: Constants.statusBarHeight + 30})}>
      <Text style={tailwind('text-white font-bold text-center text-2xl')}>{props.label}</Text>
    </View>
  </SafeAreaView>
);

export default Header;
