import React from 'react';
import {View, ScrollView, StyleSheet, Image} from 'react-native';
import {Text, Card, FAB} from '@rneui/themed';
import {useSelector, useDispatch} from 'react-redux';
import {isLogin} from '../../store/actions/userAuthAction';
export const ProductsScreen = (props: any) => {
  const dispatch = useDispatch();
  const {navigation} = props;
  const product = {
    name: 'Zapato',
  };
  const authUser = useSelector(store => store.userAuth);
  const {isLogin: login} = authUser;
  console.log(isLogin);
  const goToNewProduct = () => {
    dispatch(isLogin());
    navigation.navigate('NewProduct');
  };

  const goToProduct = () => {};

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Card>
            <Card.Title>{product.name}</Card.Title>
            <Card.Divider />
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Image
                  source={{
                    uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                  }}
                  style={{width: 100, height: 100}}
                />
              </View>
              <View style={{flex: 2}}>
                <Text style={{fontWeight: 'bold'}}>Zapato</Text>
                <Text> {'Vendedor' + login}</Text>
              </View>
            </View>
          </Card>
        </View>
      </ScrollView>
      <FAB
        icon={{name: 'add', color: 'white'}}
        size="large"
        placement="right"
        onPress={goToNewProduct}
        color="green"
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});
