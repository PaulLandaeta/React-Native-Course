import React from 'react';
import {View, Image} from 'react-native';
import {styles} from '../theme/global';
export const ScreenHome = (props: any) => {
  console.log(props);
  const {navigation} = props;
  return (
    <>
      <Image
        source={require('../assets/Pokebola.png')}
        style={styles.pokebola}
      />
      <View></View>
    </>
  );
};
