import React from 'react';
import Button from '../components/Button';
import Screen from '../components/Screen';
import Spacer from '../components/Spacer';
import {Headline} from '../components/Text';
import Header from '../components/Header';
import Container from '../components/Container';
import {ScrollView} from 'react-native';
import {addData} from '../helpers/storage';
import {useNavigation} from '@react-navigation/native';
import ImagePreview from '../components/ImagePreview';

const Detail = (props) => {
  const navigation = useNavigation();
  const {params} = props.route;
  return (
    <Screen>
      <Header label={params.item.title} />
      <Container fill>
        <ScrollView style={{flex: 1}}>
          <Container>
            {params.item.image && (
              <ImagePreview
                source={{
                  uri: params.item.image,
                }}
              />
            )}
          </Container>
        </ScrollView>
      </Container>
      <Container>
        <Button label='go back' onPress={() => navigation.goBack()} />
      </Container>
    </Screen>
  );
};

export default Detail;
