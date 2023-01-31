import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TabsNavigation} from './src/navigator/TabsNavigation';
import { initFirebase }  from './src/services/firebase';
const App = () => {
  return (
    <NavigationContainer>
      <TabsNavigation />
    </NavigationContainer>
  );
};

export default App;
