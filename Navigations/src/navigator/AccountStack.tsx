import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenHome} from './../screens/Home';
import {PokemonScreen} from '../screens/PokemonScreen';
import { ColorSpace } from 'react-native-reanimated';

export const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  const tabContext = createContext('') = {
    position = tab1,
    form = closes,
    
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
        <TabContext>
        <Stack.Screen name="ScreenHome" component={ScreenHome} />
         <Stack.Screen name="ScreenPokemon" component={PokemonScreen} />
        </TabContext>
      
    </Stack.Navigator>
  );
};
