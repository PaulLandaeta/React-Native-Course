import {useEffect, useState} from 'react';
// import {PokemonDetail} from '../interfaces/pokemonInterface';
import {pokeInstance} from './../services/pokeInstance';

export const usePokemon = (id: string) => {
  const [pokemon, setPokemon] = useState({});

  const loadPokemon = async () => {
    const pokemonResponse = await pokeInstance.get<any>(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );
    setPokemon(pokemonResponse.data);
  };
  useEffect(() => {
    // llamar al endrpoindt
    loadPokemon();
  }, []);
  return {
    pokemon,
  };
};
