import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {usePokemon} from '../hooks/usePokemon';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

export const PokemonScreen = props => {
  const {
    navigation,
    route: {params},
  } = props;
  const {top} = useSafeAreaInsets();
  const {id, name, picture, color = 'gray'} = params;
  const {pokemon} = usePokemon(id);
  console.log(`Pokemon info ${id}`, pokemon);
  const {weight, base_experience, sprites = {}} = pokemon;

  console.log(`Pokemon info ${id}`, pokemon);
  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.headerContainer,
          backgroundColor: color,
        }}>
        {/* Backbutton */}
        <TouchableOpacity
          onPress={() => navigation.pop()}
          activeOpacity={0.8}
          style={{
            ...styles.backButton,
            top: top + 5,
          }}>
          <Icon name="arrow-back-outline" color="white" size={35} />
        </TouchableOpacity>

        {/* Nombre del Pokemon */}
        <Text
          style={{
            ...styles.pokemonName,
            top: top + 40,
          }}>
          {name + '\n'}#{id}
        </Text>

        <Image source={{uri: picture}} style={styles.pokemonImage} />
      </View>
      {pokemon && (
        <View style={styles.pokemonDetail}>
          <Text style={styles.pokemonTitle}>Peso:</Text>
          <Text style={styles.pokemonInfo}>{weight} Kg</Text>
          <Text style={styles.pokemonTitle}>Experiencia:</Text>
          <Text style={styles.pokemonInfo}>{base_experience}</Text>
          <ScrollView
            style={styles.scrollView}
            horizontal
            showsHorizontalScrollIndicator={false}>
            <Image
              source={{uri: sprites.back_default}}
              style={styles.pokemonSprite}
            />
            <Image
              source={{uri: sprites.back_shiny}}
              style={styles.pokemonSprite}
            />
            <Image
              source={{uri: sprites.front_default}}
              style={styles.pokemonSprite}
            />
            <Image
              source={{uri: sprites.front_shiny}}
              style={styles.pokemonSprite}
            />
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 700,
    borderBottomLeftRadius: 700,
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  pokemonName: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.7,
  },
  pokemonImage: {
    width: 300,
    height: 300,
    position: 'absolute',
    bottom: -55,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {},
  pokemonSprite: {
    width: 150,
    height: 150,
  },
  pokemonDetail: {
    position: 'absolute',
    top: 450,
  },
  pokemonTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    left: 10,
  },
  pokemonInfo: {
    fontSize: 15,
    left: 15,
  },
});
