import React from 'react';
import {View, Image, Text, FlatList} from 'react-native';
import {styles} from '../theme/global';
import {usePokemons} from '../hooks/usePokemons';
export const ScreenHome = (props: any) => {
  console.log(props);
  const {navigation} = props;
  const {loadPokemons} = usePokemons();
  const listPokemon = [
    {
      id: '1',
      name: 'Pikachu',
    },
    {
      id: '2',
      name: 'charizard',
    },
  ];

  const Item = ({title}: any) => (
    <View style={{width: 200, height: 200}}>
      <Text>{title}</Text>
    </View>
  );
  return (
    <>
      <Image
        source={require('../assets/Pokebola.png')}
        style={styles.pokebola}
      />
      <View style={{alignItems: 'center'}}>
        <FlatList
          data={listPokemon}
          keyExtractor={pokemon => pokemon.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({item}) => <Item title={item.name} />}
        />
      </View>
    </>
  );
};
