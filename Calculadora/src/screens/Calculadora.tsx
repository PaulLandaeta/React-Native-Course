import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/global';
import {ButtonC} from '../components/ButtonC';
export const Calculadora = () => {
  const [number, setNumber] = useState('0');
  const [previous, setPrevious] = useState('0');
  const [currentOperator, setCurrentOperator] = useState('');
  const pressNumber = (digit: string) => {
    if (digit === '.' && number.includes('.')) {
      return;
    } else if (number.startsWith('0') && number.includes('.')) {
      setNumber(number + digit);
    } else if (number.startsWith('0') && !number.includes('.')) {
      if (digit === '.') {
        setNumber(number + digit);
      } else {
        setNumber(digit);
      }
    } else {
      setNumber(number + digit);
    }
  };

  const pressClean = (operator: string) => {
    console.log(operator);
    setNumber('0');
  };

  const pressOperation = (operator: string) => {
    setCurrentOperator(operator);
    setPrevious(number);
    setNumber('0');
  };

  const result = (operator: string) => {
    console.log(currentOperator);
    if (currentOperator === '') {
      setPrevious(number);
      setNumber('0');
    } else {
      if (currentOperator === '+') {
        setNumber((Number(previous) + Number(number)).toString());
        setPrevious('0');
      }
    }
  };

  const pressSign = (operator: string) => {
    if (number.startsWith('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };
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
