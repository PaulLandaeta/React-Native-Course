import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/global';
import {ButtonC} from '../components/ButtonC';
export const Calculadora = () => {
  const [number, setNumber] = useState('0');
  const action = (digit: string) => {
    console.log('press');
    setNumber(number + digit);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.result}> {number} </Text>
      <View style={styles.row}>
        <ButtonC
          text={'AC'}
          colorText="black"
          bColor="#9B9B9B"
          action={action}
        />
        <ButtonC text={'+/-'} colorText="black" bColor="#9B9B9B" />
        <ButtonC text={'%'} colorText="black" bColor="#9B9B9B" />
        <ButtonC text={'/'} bColor="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtonC text={'7'} bColor="#2D2D2D" action={action} />
        <ButtonC text={'8'} bColor="#2D2D2D" />
        <ButtonC text={'9'} bColor="#2D2D2D" />
        <ButtonC text={'X'} bColor="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtonC text={'4'} bColor="#2D2D2D" />
        <ButtonC text={'5'} bColor="#2D2D2D" />
        <ButtonC text={'6'} bColor="#2D2D2D" />
        <ButtonC text={'-'} bColor="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtonC text={'1'} bColor="#2D2D2D" />
        <ButtonC text={'2'} bColor="#2D2D2D" />
        <ButtonC text={'3'} bColor="#2D2D2D" />
        <ButtonC text={'+'} bColor="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtonC text={'0'} bColor="#2D2D2D" />
        <ButtonC text={'0'} bColor="#2D2D2D" />
        <ButtonC text={','} bColor="#2D2D2D" />
        <ButtonC text={'='} bColor="#FF9427" />
      </View>
    </View>
  );
};
