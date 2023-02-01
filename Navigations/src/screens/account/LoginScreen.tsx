import React from 'react';
import {View} from 'react-native';
import {Input, Button} from '@rneui/themed';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from './../../services/firebase';

export const LoginScreen = () => {
  const login = () => {
    signInWithEmailAndPassword(auth, 'paulwilkerlf@gmail.com', '123456')
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  };
  return (
    <>
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <View style={{flex: 1, backgroundColor: 'black'}}></View>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <Input placeholder="Email" />
          <Input placeholder="Password" secureTextEntry={true} />
          <Button
            title="LOG IN"
            buttonStyle={{
              backgroundColor: 'black',
              borderWidth: 2,
              borderColor: 'white',
              borderRadius: 30,
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
            titleStyle={{fontWeight: 'bold'}}
            onPress={login}
          />
        </View>
      </View>
    </>
  );
};
