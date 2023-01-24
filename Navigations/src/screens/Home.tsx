import React from 'react';
import {View, Text, Button} from 'react-native';
import {ButtonNavigation} from '../components/ButtonNavigation';
import Icon from 'react-native-vector-icons/Ionicons';

export const ScreenHome = (props: any) => {
  console.log(props);
  const {navigation} = props;
  let iconName = 'home-outline';
  let color = 'red';
  return (
    <View>
      <Text>Screen One </Text>
      <ButtonNavigation navigationTitle="ScreenOne" content="Ir a 1" />
      <ButtonNavigation navigationTitle="ScreenTwo" content="Ir a 2" />
      <Text>Screen Two</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('ScreenOne', {
            name: 'Paul Landaeta',
            id: 1,
          })
        }
      />
      <Icon name={iconName} size={40} color={color} />
    </View>
  );
};
