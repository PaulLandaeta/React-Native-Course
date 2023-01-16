import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './src/theme/global';
import {Calculadora} from './src/screens/Calculadora';

const App = () => {
  return (
    <SafeAreaView style={styles.app}>
      <Calculadora />
    </SafeAreaView>
  );
};
export default App;
