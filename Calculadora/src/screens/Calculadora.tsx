import React, {useState, useCallback} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/global';
import {ButtonC} from '../components/ButtonC';
import {useOperations} from '../hooks/useOperations';
export const Calculadora = () => {
  const {
    number,
    previous,
    pressNumber,
    pressSign,
    result,
    pressOperation,
    pressClean,
  } = useOperations();

  return (
    <View style={styles.container}>
      {previous !== '0' && (
        <Text numberOfLines={1} adjustsFontSizeToFit style={styles.previous}>
          {previous}
        </Text>
      )}
      <Text numberOfLines={1} adjustsFontSizeToFit style={styles.result}>
        {number}
      </Text>
      <View style={styles.row}>
        <ButtonC
          text={'AC'}
          colorText="black"
          bColor="#9B9B9B"
          action={pressClean}
        />
        <ButtonC
          text={'+/-'}
          colorText="black"
          bColor="#9B9B9B"
          action={pressSign}
        />
        <ButtonC text={'%'} colorText="black" bColor="#9B9B9B" />
        <ButtonC text={'/'} bColor="#FF9427" action={pressOperation} />
      </View>
      <View style={styles.row}>
        <ButtonC text={'7'} bColor="#2D2D2D" action={pressNumber} />
        <ButtonC text={'8'} bColor="#2D2D2D" action={pressNumber} />
        <ButtonC text={'9'} bColor="#2D2D2D" action={pressNumber} />
        <ButtonC text={'X'} bColor="#FF9427" action={pressOperation} />
      </View>
      <View style={styles.row}>
        <ButtonC text={'4'} bColor="#2D2D2D" action={pressNumber} />
        <ButtonC text={'5'} bColor="#2D2D2D" action={pressNumber} />
        <ButtonC text={'6'} bColor="#2D2D2D" action={pressNumber} />
        <ButtonC text={'-'} bColor="#FF9427" action={pressOperation} />
      </View>
      <View style={styles.row}>
        <ButtonC text={'1'} bColor="#2D2D2D" action={pressNumber} />
        <ButtonC text={'2'} bColor="#2D2D2D" action={pressNumber} />
        <ButtonC text={'3'} bColor="#2D2D2D" action={pressNumber} />
        <ButtonC text={'+'} bColor="#FF9427" action={pressOperation} />
      </View>
      <View style={styles.row}>
        <ButtonC text={'0'} bColor="#2D2D2D" action={pressNumber} />
        <ButtonC text={'0'} bColor="#2D2D2D" />
        <ButtonC text={'.'} bColor="#2D2D2D" action={pressNumber} />
        <ButtonC text={'='} bColor="#FF9427" action={result} />
      </View>
    </View>
  );
};
