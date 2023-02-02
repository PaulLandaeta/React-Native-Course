import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TabsNavigation} from './src/navigator/TabsNavigation';
import {initFirebase} from './src/services/firebase';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabsNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
