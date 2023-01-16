import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../theme/global';
export const ButtonC = (props: any) => {
  const {
    text = '1',
    bColor = 'gray',
    colorText = 'white',
    action = (number: string) => {},
  } = props;
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View style={{...styles.button, backgroundColor: bColor}}>
        <Text style={{...styles.text, color: colorText}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
