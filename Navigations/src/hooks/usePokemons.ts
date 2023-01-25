const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
import {pokeInstance} from '../services/pokeInstance';
import {useEffect, useState, useRef} from 'react';
import {Pokemon} from '../interfaces/pokemonInterface';
export const usePokemons = () => {
  // let pokemonsURL = `${BASE_URL}?limit=20`;
  const pokemonsURL = useRef(`${BASE_URL}?limit=20`);
  const [pokemonList, setPokemonList]  = useState<Pokemon[]>([]);
  const loadPokemons = async () => {
    const responsePokemons = await pokeInstance.get(pokemonsURL.current);
    const {data} = responsePokemons;
    const {results} = data;
    pokemonsURL.current = data.next;
    makePokemon(results);
  };

  const makePokemon = (data: any) => {
    console.log(data);
    const newPokemonList = data.map(({name, url}) => {
      const urlArray = url.split('/');
      const id = urlArray[urlArray.length - 2];
      console.log(urlArray);
      const newPokemon = {
        name,
        id,
        picture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
      };
      return newPokemon;
    });
    //
    setPokemonList([...pokemonList, ...newPokemonList]);
  };

  useEffect(() => {
    loadPokemons();
  }, []);
  return {
    loadPokemons,
    pokemonList,
  };
};
