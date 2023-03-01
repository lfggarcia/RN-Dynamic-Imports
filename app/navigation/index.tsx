import React, {useEffect, useMemo, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Stacks from '../features/**/navigator.tsx';

interface Navigator {
  name: string;
  Component: React.ComponentType<any>;
}

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
          screenOptions={{headerShown: false}}
          initialRouteName={navigators[0].name}>
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
