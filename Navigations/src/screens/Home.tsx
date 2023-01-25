import React from 'react';
import {View, Image, Text, FlatList} from 'react-native';
import {styles} from '../theme/global';
import {usePokemons} from '../hooks/usePokemons';
import {PokemonCard} from '../components/pokemonCard';

export const ScreenHome = (props: any) => {
  console.log(props);
  const {navigation} = props;
  const {loadPokemons, pokemonList} = usePokemons();
  console.log('=======', pokemonList);

  return (
    <>
      <Image
        source={require('../assets/Pokebola.png')}
        style={styles.pokebola}
      />
      <View style={{alignItems: 'center'}}>
        <FlatList
          data={pokemonList}
          keyExtractor={pokemon => pokemon.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({item}) => <PokemonCard title={item.name} />}
        />
      </View>
    </>
  );
};
