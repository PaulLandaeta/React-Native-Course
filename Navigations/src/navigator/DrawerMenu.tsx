import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ScreenTwo} from '../screens/ScreenTwo';
import {StackNavigation} from './StackNavigation';


const Drawer = createDrawerNavigator();

export const DrawerMenu = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="" component={StackNavigation} />
      <Drawer.Screen name="ScreenTwo" component={ScreenTwo} />
    </Drawer.Navigator>
  );
};
