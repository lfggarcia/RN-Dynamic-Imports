import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from './screen/login.screen';
import {DEFAULT_SCREEN_OPTIONS} from 'navigation';

const Stack = createNativeStackNavigator();

export const isDefault = true;
export const NAME = 'AuthNavigator';

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={DEFAULT_SCREEN_OPTIONS}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
