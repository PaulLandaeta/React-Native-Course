import {useCallback, useState} from 'react';
export const useOperations = () => {
  const [number, setNumber] = useState('0');
  const [previous, setPrevious] = useState('0');
  const [currentOperator, setCurrentOperator] = useState('');
  const pressNumber = useCallback(
    (digit: string) => {
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
    },
    [number],
  );

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
    console.log(operator);
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
    console.log(operator);
    if (number.startsWith('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };
  return {
    number,
    previous,
    currentOperator,
    pressNumber,
    pressSign,
    result,
    pressOperation,
    pressClean,
  };
};
