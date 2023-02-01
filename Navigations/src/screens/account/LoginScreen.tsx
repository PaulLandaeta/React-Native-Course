import React from 'react';
import {View} from 'react-native';
import {Input, Button} from '@rneui/themed';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from './../../services/firebase';
import {useFormik} from 'formik';
import * as YUP from 'yup';
const initialValues = {
  email: '',
  password: '',
};

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
        console.error(errorCode);
      });
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: YUP.object({
      email: YUP.string()
        .required('El email es Requerido.')
        .email('No es un email valido'),
      password: YUP.string().required('El password es Requerido.'),
    }),
    // validationOnChange: false,
    onSubmit: formValue => {
      try {
        setTimeout(() => {
          console.log(JSON.stringify(formValue, null, 2));
        }, 400);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <View style={{flex: 1, backgroundColor: 'black'}}></View>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <Input
            placeholder="Email"
            onChangeText={text => formik.setFieldValue('email', text)}
            errorMessage={formik.errors.email}
          />
          <Input
            placeholder="Password"
            errorMessage={formik.errors.password}
            onChangeText={text => formik.setFieldValue('password', text)}
            secureTextEntry={true}
          />
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
            onPress={formik.handleSubmit}
          />
        </View>
      </View>
    </>
  );
};
