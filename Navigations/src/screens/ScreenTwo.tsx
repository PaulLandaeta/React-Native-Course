import React from 'react';
import {View, Text} from 'react-native';
import {ButtonNavigation} from '../components/ButtonNavigation';
export const ScreenTwo = () => {
  return (
    <View>
      <Text>Screen Two</Text>
      <ButtonNavigation canBack content="ir atras" />
    </View>
  );
};
