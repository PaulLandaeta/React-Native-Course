import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

export const PokemonCard = (props: any) => {
  const {pokemon} = props;
  const {name: title, picture} = pokemon;
  return (
    <TouchableOpacity>
      <View style={{...styles.container}}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.pokebolaContainer}>
          <Image
            source={require('../assets/Pokebola.png')}
            style={styles.pokebola}
          />
        </View>
        <View style={styles.pokemonContainer}>
          <Image source={{uri: picture}} style={styles.pokemonImage} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDB5A5',
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
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  pokemonContainer: {
    bottom: 0,
    right: 0,
    position: 'absolute',
  },
  pokemonImage: {
    width: 100,
    height: 100,
    right: -15,
    bottom: -10,
  },
});
