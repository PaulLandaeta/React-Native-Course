import {useEffect, useState} from 'react';
import {pokeInstance} from './../services/pokeInstance';

export const usePokemon = (id: string) => {
  const [pokemon, setPokemon] = useState({});

  const loadPokemon = async () => {
    const pokemonResponse = await pokeInstance.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );
    setPokemon(pokemonResponse);
  };
  useEffect(() => {
    // llamar al endrpoindt
    loadPokemon();
  }, []);
  return {
    pokemon,
  };
};
