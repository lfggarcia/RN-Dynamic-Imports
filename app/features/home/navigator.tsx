import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DEFAULT_SCREEN_OPTIONS} from 'navigation';
import {HomeScreen} from 'features/home/screens/home.screen';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={DEFAULT_SCREEN_OPTIONS}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
