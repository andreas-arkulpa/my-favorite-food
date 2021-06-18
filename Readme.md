# Workshop Expo / React Native (144)

| Home Screen                                                                                                         | Detail Screen                                                                                                         | New Screen                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| <img src="https://github.com/andreas-arkulpa/my-favorite-food/blob/main/screenshots/Home.png?raw=true" width="150"> | <img src="https://github.com/andreas-arkulpa/my-favorite-food/blob/main/screenshots/Detail.png?raw=true" width="150"> | <img src="https://github.com/andreas-arkulpa/my-favorite-food/blob/main/screenshots/New.png?raw=true" width="150"> |

## Step 1 - Project setup (5)

### Requirements:

- Node.js
- Git
- Visual Studio Code
- Expo CLI: `npm install -g expo-cli`
- Emulator (or Smartphone) with the Expo-Client installed (https://docs.expo.io/get-started/installation/#requirements)
- Expo-Docs: https://docs.expo.io

### initialize Project (5)

- create a new empty repo (**without Readme.md and .gitignore file**) called `my-favorite-food-2021` on GitHub, copy the clone url and clone the project
- `cd my-favorite-food-2021`
- `expo init .` (don't forget the dot! select the <b>blank</b> template in managed workflow)
- `npm start`

## Step 2 - Config Expo (4)

The app.json ([docs](https://docs.expo.io/versions/latest/config/app/)) file contains configuration options for your project.<br/>
We need to change the following ones:

- `name` => `my-favorite-food` (the name of your app)
- `slug` => `my-favorite-food` (the friendly URL name for publishing. For example, `my-favorite-food` will refer to the `expo.io/@project-owner/my-favorite-food` project)
- `icon` => `./assets/logo.png` (app icon - [download](https://github.com/andreas-arkulpa/my-favorite-food/blob/main/assets/logo.png))
- `splash.backgroundColor` => `#ff9100` (color to fill the loading screen background)
- `web.favicon` => `./assets/logo.png` (web favicon - [download](https://github.com/andreas-arkulpa/my-favorite-food/blob/main/assets/logo.png))

## Step 3 - Styles (3)

- set the `backgroundColor` from `#fff` to `#ff9100`
- add a new style for the text. set the text `color` to `#fff`

## Step 4 - Status Bar (10)

We want to set the background color of the status bar ([docs](https://docs.expo.io/versions/latest/sdk/status-bar/)) to `#ff9100`:

- install StatusBar package `expo install expo-status-bar`
- import package

```jsx
import {StatusBar} from 'expo-status-bar';
```

- make usage of the StatusBar Component

```jsx
<StatusBar backgroundColor={'#ff9100'} translucent={true} style='light' />
```

- On android devices the StatusBar is not correct until the expo app has been loaded. We can adjust this in the `app.json` file. Add the following options:

```javascript
"androidStatusBar": {
    "backgroundColor": "#ff9100",
    "barStyle": "light-content"
}
```

## Step 5 - Refactoring to ES6 arrow functions (5)

- convert code in the App.js file to an ES6 arrow function

```jsx
const HomeScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
};
```

## Step 6 - Components

- create folder `components`

### Text (5)

- create file `Text.js` in the `components` folder
- create a Headline component (use Text from react-native) and assign the following styles `fontSize: 30, color: 'black'`
- create a Paragraph component (use Text from react-native) and assign the following styles `fontSize: 16, color: 'black'`
- keep in mind to handle passed props (props.children => text to show in this case)
- export components (multiple exports)
- use both components in App.js

### ImagePreview (5)

- create file `ImagePreview.js` in the `components` folder
- create a ImagePreview component (use Image from react-native) and assign the following styles: `width: '100%', height: 200, resizeMode: 'cover'`
- keep in mind to handle passed `source` prop (use as source in the Image component)
- export component (default export)
- use component with local [download](https://github.com/andreas-arkulpa/my-favorite-food/blob/main/assets/pizza.jpg) and remote (https://github.com/andreas-arkulpa/my-favorite-food/blob/main/assets/pizza.jpg) sources in App.js

### Button (8)

- create file `Button.js` in the `components` folder
- create a Button component (use TouchableOpacity and Text from react-native) and assign the following styles.
- Wrapper (TouchableOpacity) :

```jsx
{
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ff9100',
    borderRadius: 10,
    padding: 20,
    width: '100%'
}
```

- Label (Text):

```jsx
{
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
}
```

- keep in mind to handle passed `onPress` prop (use as onPress in the TouchableHighlight component)
- keep in mind to handle passed `label` prop (use as text-value in the Text component)
- export component (default export)
- use component in App.js

## Step 7 - Navigation (13)

There are multiple libraries to handle navigation in react-native. One of the most used is `react-navigation`. See the docs [here](https://reactnavigation.org/docs/getting-started)<br/>
If you think of a website, you know that there different URLs that you can go to - some libraries call these Routes. In a mobile app you don't have URLs, but you can have different views, which we call "Screens".

- install the following packages

```
npm install @react-navigation/native

expo install react-native-gesture-handler react-native-reanimated react-native-screens @react-native-community/masked-view

npm install @react-navigation/stack
```

- we need to import `react-native-gesture-handler` at the top of our `App.js` file. Used for handling native touch and gestures in react-navigation

```jsx
import 'react-native-gesture-handler';
```

- create NavigatioContainer in `App.js`

```jsx
import { NavigationContainer } from '@react-navigation/native';

...

<NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
```

- add Stack to the Navigation

```jsx
import { createStackNavigator } from '@react-navigation/stack';

...

const Stack = createStackNavigator();

...

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

....

<NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
</NavigationContainer>

```

- create folder `screens`
- create file `HomeScreen.js` in the `screens` folder
- make usage of our components and render some of these
- copy the file `HomeScreen.js` and rename it to `Detail.js` (also rename the function component in the file)
- copy the file `HomeScreen.js` and rename it to `New.js` (also rename the function component in the file)
- create two new `Stack.Screen` entries for new Screens `Detail` and `New`

## Step 8 - new components

### Container (8)

- create file `Container.js` in the `components` folder
- create a Container component (use View from react-native) and assign the following styles (depending on the passed `fill` prop).
- if `fill` is not provided assign these styles

```jsx
{
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
},
```

- and these if `fill` is provided

```jsx
{
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
}
```

- make sure to pass the `children` props to the View
- make use of the component in our Screens

### Screen (4)

- create file `Screen.js` in the `components` folder
- create a Screen component (use `View` from `react-native`) and assign the following styles

```jsx
{
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff'
}
```

- make sure to pass the `children` props to the View
- make use of the component in our Screens

### Spacer (4)

- create file `Spacer.js` in the `components` folder
- create a Spacer component (use `View` from `react-native`) and assign the following styles

```jsx
{
    height: 25,
    width: 25
}
```

- make use of the component in our Screens

### Header (10)

- create file `Header.js` in the `components` folder
- install `expo install expo-constants` ([docs](https://docs.expo.io/versions/latest/sdk/constants/))
- create the following component

```jsx
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
```

### FoodItem (14)

- create file `FoodItem.js` in the `components` folder
- create the following component

```jsx
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
```

### Input (12)

- create file `Input.js` in the `components` folder
- create a Input component (use `TextInput` from `react-native`) and assign the following styles

```jsx
{
    borderColor: '#ff9100',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 12
}
```

- make sure to pass the `value`, `onChangeText` and `placeholder` props to the TextInput
- make use of the component in our Screens

## Step 9 - Async Storage (15)

An asynchronous, unencrypted, persistent, key-value storage API.

- install `expo install @react-native-async-storage/async-storage` ([docs](https://docs.expo.io/versions/latest/sdk/async-storage/))
- create some helper functions to store and read from Async Storage
- create folder `helpers`
- create file `storage.js` in the `helpers` Screen
- import Async Storage

```jsx
import AsyncStorage from '@react-native-async-storage/async-storage';
```

- define a storage key for the key-value pair

```jsx
const STORAGE_KEY = 'my-favorite-food/items';
```

- storeData

```jsx
export const storeData = async (value) => {
  try {
    const json = JSON.stringify(value);
    await AsyncStorage.setItem(STORAGE_KEY, json);
  } catch (error) {
    console.log(error);
  }
};
```

- getData

```jsx
export const getData = async () => {
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    if (json === null) return null;
    return JSON.parse(json);
  } catch (error) {
    console.log(error);
  }
};
```

- addData

```jsx
export const addData = async (value) => {
  let data = [];
  const existing = await getData();
  if (existing) data = [...existing];
  data.push(value);
  await storeData(data);
};
```

## Step 10 - combine storage, navigation, states (14)

- we need to combine everything and make sure we have the following code for the different screen
- Home Screen

```jsx
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
```

- Detail Screen

```jsx
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
```

- New Screen

```jsx
import React, {useState} from 'react';
import Button from '../components/Button';
import Screen from '../components/Screen';
import Spacer from '../components/Spacer';
import {Headline} from '../components/Text';
import Header from '../components/Header';
import Container from '../components/Container';
import {ScrollView} from 'react-native';
import {addData} from '../helpers/storage';
import {useNavigation} from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import ImagePreview from '../components/ImagePreview';
import Input from '../components/Input';

const New = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);

  const selectImage = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setImage(pickerResult.uri);
  };

  const save = async () => {
    await addData({title, image});
    navigation.goBack();
  };
  return (
    <Screen>
      <Header label='What food do you like most?' />
      <Container fill>
        <ScrollView style={{flex: 1}}>
          <Container>
            <Input value={title} onChangeText={(text) => setTitle(text)} placeholder={'insert Title'} />
            <Spacer />
            {image && (
              <Fragment>
                <ImagePreview
                  source={{
                    uri: image,
                  }}
                />
                <Spacer />
              </Fragment>
            )}
            <Button label='select image' onPress={() => selectImage()} />
          </Container>
        </ScrollView>
      </Container>
      <Container>
        <Button label='save' disabled={title === '' || !image} onPress={() => save()} />
      </Container>
    </Screen>
  );
};

export default New;
```

## Step 11 - Bonus: React-Native Web with Expo.
