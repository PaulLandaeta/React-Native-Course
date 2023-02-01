import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from './../../services/firebase';

export const WelcomeScreen = () => {
  const [hasLogged, setHasLogged] = useState(false);

  useEffect(() => {
    // TODO: getAuth from Firebase
    onAuthStateChanged(auth, (user: any) => {
      console.log(user);
      setHasLogged(user ? true : false);
    });
  }, []);
  return hasLogged ? (
    <View>
      <Text>Screen Welcome Logged</Text>
    </View>
  ) : (
    <View>
      <Text>Screen Welcome</Text>
    </View>
  );
};
