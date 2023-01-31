import React from 'react';
import {ProductsScreen} from '../screens/products/ProductsScreen';
import {NewProductScreen} from '../screens/products/NewProductScreen';
import {ProductScreen} from '../screens/products/ProductScreen';
import {FeedbackScreen} from '../screens/products/FeedbackScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export const ProductStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="NewProduct" component={NewProductScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Feedback" component={FeedbackScreen} />
    </Stack.Navigator>
  );
};
