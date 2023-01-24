import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigation} from './src/navigator/StackNavigation';
// import {DrawerMenu} from './src/navigator/DrawerMenu';
import {TabsNavigation} from './src/navigator/TabsNavigation';

const App = () => {
  return (
    <NavigationContainer>
      {/* <SafeAreaView> */}
      {/* <StackNavigation /> */}
      {/* </SafeAreaView> */}
      {/* <DrawerMenu /> */}
      <TabsNavigation />
    </NavigationContainer>
  );
};

export default App;
