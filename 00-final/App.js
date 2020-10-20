import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import Home from './screens/Home';
import Detail from './screens/Detail';
import New from './screens/New';
import {StatusBar} from 'expo-status-bar';

const Stack = createStackNavigator();

const forFade = ({current}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'#ff9100'} translucent={true} style='light' />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: forFade,
          }}>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Detail' component={Detail} />
          <Stack.Screen name='New' component={New} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
