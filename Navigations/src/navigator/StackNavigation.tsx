import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenHome} from './../screens/Home';

export const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ScreenHome" component={ScreenHome} />
    </Stack.Navigator>
  );
};
