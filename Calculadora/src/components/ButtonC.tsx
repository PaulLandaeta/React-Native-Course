import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../theme/global';
interface Props {
  text: string;
  bColor: string;
  colorText: string;
  action: (number: string) => void;
}
export const ButtonC = ({text, bColor, colorText = 'white', action}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View style={{...styles.button, backgroundColor: bColor}}>
        <Text
          style={{...styles.text, color: colorText}}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
