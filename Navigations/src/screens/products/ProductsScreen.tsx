import React from 'react';
import {View, Text} from 'react-native';

export const ProductsScreen = (props: any) => {
  const {navigation} = props;
  const goToNewProduct = () => {
    // navigation.navigate(screen)
  };

  const goToProduct = () => {};

  return (
    <View>
      <Text>Screen Products</Text>
    </View>
  );
};
