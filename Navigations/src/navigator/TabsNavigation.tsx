import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreenTwo} from '../screens/ScreenTwo';
import {ScreenOne} from '../screens/ScreenOne';
import Icon from 'react-native-vector-icons/Ionicons';
import {screen} from './constants';
import {ProductStack} from './ProductStack';
import {AccountStack} from './AccountStack';

const Tab = createBottomTabNavigator();

export const TabsNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: () => getIconByTab(route),
      })}>
      <Tab.Screen name={screen.homeStack.tab} component={ProductStack} />
      <Tab.Screen name="ScreenOne" component={ScreenOne} />
      <Tab.Screen name="ScreenTwo" component={ScreenTwo} />
      <Tab.Screen name={screen.accountStack.tab} component={AccountStack} />
    </Tab.Navigator>
  );
};

const getIconByTab = (route: any) => {
  console.log(route);
  if (route.name === screen.homeStack.tab) {
    return <Icon name={screen.homeStack.icon} color="red" size={20} />;
  }
  if (route.name === screen.accountStack.tab) {
    return <Icon name={screen.accountStack.icon} color="red" size={20} />;
  }
  return <Icon name={screen.homeStack.icon} color="green" size={20} />;
};
