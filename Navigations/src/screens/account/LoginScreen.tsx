import React from 'react';
import {View} from 'react-native';
import {Input, Button} from '@rneui/themed';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth, db} from './../../services/firebase';
import {useFormik} from 'formik';
import * as YUP from 'yup';
import {collection, addDoc} from 'firebase/firestore';
const initialValues = {
  email: '',
  password: '',
};

export const LoginScreen = () => {
  const login = async () => {
    // signInWithEmailAndPassword(auth, 'paulwilkerlf@gmail.com', '123456')
    //   .then(userCredential => {
    //     // Signed in
    //     const user = userCredential.user;
    //     console.log(user);
    //     // ...
    //   })
    //   .catch(error => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.error(errorMessage);
    //     console.error(errorCode);
    //   });

    // Llenar a firestore un product
    console.log('enter login');
    try {
      console.log('aait');
      const docRef = await addDoc(collection(db, 'products'), {
        nombre: 'Ada',
        vendedor: 'Lovelace',
        price: 1815,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.log('Error adding document: ', e);
    }
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
        login();
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
