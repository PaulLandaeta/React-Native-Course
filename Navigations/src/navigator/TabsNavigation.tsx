import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreenTwo} from '../screens/ScreenTwo';
import {ScreenOne} from '../screens/ScreenOne';
import {ScreenHome} from '../screens/Home';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const TabsNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Casita',
          tabBarIcon: () => <Icon name="home-outline" color="red" size={20} />,
        }}
        component={ScreenHome}
      />
      <Tab.Screen name="ScreenOne" component={ScreenOne} />
      <Tab.Screen name="ScreenTwo" component={ScreenTwo} />
    </Tab.Navigator>
  );
};
