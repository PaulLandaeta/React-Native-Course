import React, {useEffect, useState, useContext} from 'react';
import {View, Text} from 'react-native';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from './../../services/firebase';
import {Button, ButtonGroup, withTheme} from '@rneui/themed';
import {AuthContext} from '../../contexts/authContext';

export const WelcomeScreen = props => {
  const {navigation} = props;
  const [hasLogged, setHasLogged] = useState(false);

  const {login: loginContext, isLogin: isLoginContext} =
    useContext(AuthContext);
  console.log('login antes del tap ', isLoginContext);
  const goToLogin = () => {
    loginContext();
    navigation.navigate('LoginScreen');
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      console.log(user);
      setHasLogged(user ? true : false);
    });
  }, []);
  return !hasLogged ? (
    <View>
      <Text>Screen Welcome Logged</Text>
    </View>
  ) : (
    <View>
      <Text>Screen Welcome</Text>
      <Button
        title="Log in"
        loading={false}
        loadingProps={{size: 'small', color: 'white'}}
        buttonStyle={{
          backgroundColor: 'rgba(111, 202, 186, 1)',
          borderRadius: 5,
        }}
        titleStyle={{fontWeight: 'bold', fontSize: 23}}
        containerStyle={{
          marginHorizontal: 50,
          height: 50,
          width: 200,
          marginVertical: 10,
        }}
        onPress={goToLogin}
      />
    </View>
  );
};
