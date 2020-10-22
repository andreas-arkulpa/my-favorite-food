import React, {useEffect, useLayoutEffect, useState} from 'react';
import Button from '../components/Button';
import Screen from '../components/Screen';
import Spacer from '../components/Spacer';
import {Headline, Paragraph} from '../components/Text';
import Header from '../components/Header';
import Container from '../components/Container';
import FoodItem from '../components/FoodItem';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {getData} from '../helpers/storage';
import {ScrollView} from 'react-native';

const Home = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState([]);
  useFocusEffect(() => {
    getData().then((data) => {
      if (data) setItems(data);
    });
  });
  return (
    <Screen>
      <Header label='In the mood for food?' />
      <Container fill>
        {items.length > 0 && (
          <ScrollView style={{flex: 1}}>
            <Container>
              {items.map((item, index) => (
                <FoodItem key={index} item={item} onPress={() => navigation.navigate('Detail', {item})} />
              ))}
            </Container>
          </ScrollView>
        )}
      </Container>
      <Container>
        <Button
          label='add food'
          onPress={() => {
            navigation.navigate('New');
          }}
        />
      </Container>
    </Screen>
  );
};

export default Home;
