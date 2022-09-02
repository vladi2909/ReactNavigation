import React from 'react';
import { Main } from './screens/Main';
import { Contacts } from './screens/Contacts';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Main'
          component={Main}
        />
        <Stack.Screen
          name='Contacts'
          component={Contacts}
          options={{ title: 'Главная' }}
        />
      </Stack.Navigator>
      </NavigationContainer>
  );
}