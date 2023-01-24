import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button} from 'react-native';
import {ScreenHome} from './../screens/Home';

import {ScreenOne} from './../screens/ScreenOne';
import {ScreenTwo} from './../screens/ScreenTwo';

export const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0, // TODO fix elevation styke
          shadowColor: 'transparent',
          backgroundColor: 'white',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="ScreenHome"
        options={{title: 'Home'}}
        component={ScreenHome}
      />
      <Stack.Screen
        name="ScreenOne"
        component={ScreenOne}
      />
      <Stack.Screen
        name="ScreenTwo"
        options={{
          title: 'Two',
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
        }}
        component={ScreenTwo}
      />
      {/* Poner pagina 3<Stack.Screen name="Home" component={ScreenHome} /> */}
    </Stack.Navigator>
  );
};
