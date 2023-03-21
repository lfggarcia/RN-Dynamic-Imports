import React, {useEffect, useMemo, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import * as Stacks from 'features/**/navigator.tsx';

interface Navigator {
  name: string;
  Component: React.ComponentType<any>;
}

export const DEFAULT_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
};

const Stack = createNativeStackNavigator();

function App(): JSX.Element | null {
  const [navigators, setNavigators] = useState<Navigator[]>([]);

  const makeNavigator = (): void => {
    const _navigators = Object.keys(Stacks).map(_stack => ({
      name: Array.from(new Set((_stack || '').split('$'))).toString(),
      Component: Stacks[_stack],
    }));
    setNavigators(_navigators);
  };

  const FeaturesStacks = useMemo(() => {
    if (navigators.length === 0) {
      return null;
    }
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={DEFAULT_SCREEN_OPTIONS}
          initialRouteName={'outDates'}>
          {navigators.map(nav => (
            <Stack.Screen
              name={nav.name}
              component={nav.Component}
              key={nav.name}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }, [navigators]);

  useEffect(() => {
    makeNavigator();
  }, []);

  return FeaturesStacks;
}

export default App;
