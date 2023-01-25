import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

export const PokemonCard = (props: any) => {
  const {title} = props;
  return (
    <TouchableOpacity>
      <View style={{...styles.container}}>
        <Text>{title}</Text>
        <View style={styles.pokebolaContainer}>
          <Image
            source={require('../assets/Pokebola.png')}
            style={styles.pokebola}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    marginHorizontal: 10,
    width: 200,
    height: 100,
    marginBottom: 10,
    borderRadius: 25,
  },
  pokebola: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: -35,
    right: -20,
  },
  pokebolaContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    borderRadius: 25,
    bottom: 0,
    right: 0,
    overflow: 'hidden',
    opacity: 0.8,
  },
});
