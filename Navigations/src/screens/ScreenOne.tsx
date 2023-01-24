import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
export const ScreenOne = (props: any) => {
  const {route, navigation} = props;
  const {params = {}} = route;
  const {id = 0, name = ''} = params;
  console.log(route);
  useEffect(() => {
    navigation.setOptions({
      title: "desde One",
      headerLeft: () => {
        <Button title="Menu" onPress={() => navigation.popToTop()} />;
      },
    });
  }, []);

  return (
    <View>
      <Text>Screen One</Text>
      <Text>{id}</Text>
      <Text>{name}</Text>
    </View>
  );
};
