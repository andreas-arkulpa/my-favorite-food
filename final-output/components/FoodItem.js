import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Spacer from './Spacer';

const foodItemStyles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
  image: {
    marginRight: 10,
    height: 50,
    width: 50,
  },
  title: {fontSize: 20, color: 'black', textAlign: 'left'},
});

const FoodItem = (props) => (
  <TouchableOpacity onPress={() => props.onPress()}>
    <View style={foodItemStyles.wrapper}>
      <Image
        resizeMode='cover'
        source={{
          uri: props.item.image,
        }}
        style={foodItemStyles.image}
      />
      <Text style={foodItemStyles.title}>{props.item.title}</Text>
    </View>
  </TouchableOpacity>
);

export default FoodItem;
