import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CreateOutdateScreen} from './screens/create.screen';
import {AddInformationScreen} from './screens/information.screen';
import {DEFAULT_SCREEN_OPTIONS} from 'navigation';

const Stack = createNativeStackNavigator();

const OutdateNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="CreateOutDateInformationScreen"
      screenOptions={DEFAULT_SCREEN_OPTIONS}>
      <Stack.Screen
        name="CreateOutDateScreen"
        component={CreateOutdateScreen}
      />
      <Stack.Screen
        name="CreateOutDateInformationScreen"
        component={AddInformationScreen}
      />
    </Stack.Navigator>
  );
};

export default OutdateNavigator;
