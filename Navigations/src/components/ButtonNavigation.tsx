import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {NavigationRouteContext, useNavigation} from '@react-navigation/native';
export const ButtonNavigation = (props: any) => {
  const {content, navigationTitle, canBack = false} = props;
  const navigator = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        canBack ? navigator.popToTop() : navigator.navigate(navigationTitle)
      }>
      <View>
        <Text>{content}</Text>
      </View>
    </TouchableOpacity>
  );
};
