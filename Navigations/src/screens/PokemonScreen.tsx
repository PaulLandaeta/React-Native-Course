import React from 'react';
import {View, Text} from 'react-native';
import {usePokemon} from '../hooks/usePokemon';

export const PokemonScreen = props => {
  const {route} = props;
  const {params} = route;
  console.log(params);
  const {pokemon} = usePokemon('1');
  console.log(pokemon);
  return (
    <View>
      <Text>'Hola'</Text>
    </View>
  );
};
